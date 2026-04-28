import { dockApps, locations } from '#constants';
import React, { useRef, useCallback, useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';

const Dock = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const dockRef = useRef(null);

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

      dock.addEventListener('mousemove', handleMouseMove);
      dock.addEventListener('mouseleave', resetIcons);
    });
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
    <section id='dock'>
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
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              disabled= {!canOpen}
              onClick={() => toggleApp({id, canOpen, action})}
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
        <Tooltip 
          id="dock-tooltip" 
          place="top" 
          effect="solid" 
          delayShow={150}
          delayHide={0}
        />
      </div>
    </section>
  )
});

Dock.displayName = 'Dock';

export default Dock
