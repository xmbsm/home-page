import { dockApps, locations } from '#constants';
import React, { useRef, useCallback, useEffect, useState } from 'react'
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';

const Dock = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const dockRef = useRef(null);
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });
  const iconPositions = useRef({});

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;
    
    const icons = dock.querySelectorAll('.dock-icon');
    icons.forEach((icon) => {
      const rect = icon.getBoundingClientRect();
      iconPositions.current[icon.querySelector('img').alt] = {
        left: rect.left,
        top: rect.top,
        width: rect.width
      };
    });
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openWindow = useWindowStore(state => state.openWindow);
  const closeWindow = useWindowStore(state => state.closeWindow);
  const windows = useWindowStore(state => state.windows);
  const setActiveLocation = useLocationStore(state => state.setActiveLocation);

  useEffect(() => {
    const dock  = dockRef.current;
    if (!dock || isMobile) return () => {};
    
    Promise.all([
      import('gsap'),
      import('@gsap/react')
    ]).then(([{ gsap }]) => {
      const icons =  dock.querySelectorAll('.dock-icon');

      const animateIcons = (mouseX) => {
        const {left} = dock.getBoundingClientRect();

        icons.forEach((icon) => {
          const { left: iconLeft , width} = icon.getBoundingClientRect();
          const center = iconLeft - left + width / 2;
          const distance = Math.abs(mouseX - center)

          const intensity = Math.exp(-(distance ** 2.5)/ 150000);

          gsap.to(icon, {
            scale: 1 + 0.25 * intensity,
            y: -20 * intensity,
            duration: 0.2,
            ease: 'power1.out'
          })
        })
      }

      const handleMouseMove = (e) => {
        const {left } = dock.getBoundingClientRect();

        animateIcons(e.clientX - left);
      }

      const resetIcons = () => icons.forEach((icon) => gsap.to(icon, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power1.out'
      }))

      const handleMouseLeave = () => {
        resetIcons();
        setTooltip({ show: false, text: '', x: 0, y: 0 });
      }

      dock.addEventListener('mousemove', handleMouseMove);
      dock.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        dock.removeEventListener('mousemove', handleMouseMove);
        dock.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;
    
    const container = containerRef.current;
    let touchStartX = 0;
    let touchEndX = 0;
    let scrollLeft = 0;
    let isScrolling = false;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      scrollLeft = container.scrollLeft;
      isScrolling = true;
    };

    const handleTouchMove = (e) => {
      if (!isScrolling) return;
      touchEndX = e.touches[0].clientX;
      const diff = touchStartX - touchEndX;
      container.scrollLeft = scrollLeft + diff;
    };

    const handleTouchEnd = () => {
      isScrolling = false;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  const toggleApp = useCallback((app) => {
    if (!app.canOpen) return;

    if (app.action === 'trash') {
      openWindow('finder');
      setActiveLocation(locations.trash);
      return;
    }

    if (app.id === 'finder') {
      openWindow('finder');
      setActiveLocation(locations.work);
      return;
    }

    const win = windows[app.id];

    if (!win) {
      console.log(`Window not found for app: ${app.id}`);
      return;
    }

    if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  }, [openWindow, closeWindow, windows, setActiveLocation]);

  return (
    <>
      <section id='dock'>
        <div 
          ref={containerRef}
          className='dock-scroll-container'
        >
          <div 
            ref={dockRef} 
            className='dock-container'
          >
            {dockApps.map(({id, name, icon, canOpen, action}) => (
              <div 
                key={id} 
                className='relative flex justify-center'
              >
                <button 
                  type='button' 
                  className='dock-icon'
                  aria-label={name}
                  disabled= {!canOpen}
                  onClick={() => toggleApp({id, canOpen, action})}
                  onTouchStart={(e) => e.preventDefault()}
                  onMouseEnter={(e) => {
                    const position = iconPositions.current[name] || e.currentTarget.getBoundingClientRect();
                    setTooltip({ 
                      show: true, 
                      text: name, 
                      x: position.left + (position.width || e.currentTarget.offsetWidth) / 2, 
                      y: position.top - 28 
                    });
                  }}
                  
                >
                  <img 
                    src={`/images/${icon}`}
                    alt={name}
                    loading='lazy'
                    className={canOpen ? '' : 'opacity-60'}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {tooltip.show && (
        <div 
          style={{
            position: 'fixed',
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)',
            fontSize: '12px',
            padding: '5px 12px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            color: '#ffffff',
            whiteSpace: 'nowrap',
            lineHeight: '1.5',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            zIndex: 99999,
            pointerEvents: 'none',
            minWidth: '30px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            transition: 'all 0.3s ease'
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  )
});

Dock.displayName = 'Dock';

export default Dock
