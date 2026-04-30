import { navIcons, navLinks, locations } from "#constants";
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';
import { useEffect, useRef, useState } from "react";
import Clock from './Clock';
import NavLink from "./NavLink";

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openWindow = useWindowStore(state => state.openWindow);
  const setActiveLocation = useLocationStore(state => state.setActiveLocation);

  const wrapperRef = useRef(null);
  const gifRef = useRef(null);
  const logoPortfolioRef = useRef(null);
  const logoPortfolioPlaceholderRef = useRef(null);
  const settingsButtonRef = useRef(null);
  const mobileMenuBtnRef = useRef(null);

  useEffect(() => {
    const handleMenuClick = () => {
      setIsMobileMenuOpen(prev => !prev);
    };
    
    const btn = mobileMenuBtnRef.current;
    if (btn) {
      btn.addEventListener('click', handleMenuClick);
      return () => btn.removeEventListener('click', handleMenuClick);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    Promise.all([
      import('gsap'),
      import('gsap/Draggable')
    ]).then(([{ gsap }, { Draggable }]) => {
      const wrapper = wrapperRef.current;
      const gif = gifRef.current;
      const logoPortfolio = logoPortfolioRef.current;
      const logoPortfolioPlaceholder = logoPortfolioPlaceholderRef.current;

      if (!wrapper || !gif) return;

      gsap.set(gif, {
        opacity: 0,
        y: 8
      });

      if (logoPortfolioPlaceholder) {
        gsap.set(logoPortfolioPlaceholder, { opacity: 0 });
      }

      const enter = () => {
        gsap.to(gif, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out"
        });
      };

      const leave = () => {
        gsap.to(gif, {
          opacity: 0,
          y: 8,
          duration: 0.3,
          ease: "power3.out"
        });
      };

      wrapper.addEventListener("mouseenter", enter);
      wrapper.addEventListener("mouseleave", leave);

      if (logoPortfolio && logoPortfolioPlaceholder) {
        const snapThreshold = 500;

        Draggable.create(logoPortfolio, {
          type: "x,y",
          bounds: "body",
          cursor: "grab",
          activeCursor: "grabbing",
          zIndexBoost: false,
          onDragStart: function () {
            gsap.to(logoPortfolioPlaceholder, { opacity: 1, duration: 0.2 });
          },
          onDragEnd: function () {
            const isWithinSnapZone = 
              Math.abs(this.x) < snapThreshold && 
              Math.abs(this.y) < snapThreshold;

            if (isWithinSnapZone) {
              gsap.to(this.target, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }
            
            gsap.to(logoPortfolioPlaceholder, { opacity: 0, duration: 0.2 });
          }
        });
      }
    });
  }, []);

  const handleNavLinkClick = (type) => {
    if (!type) return;

    if (type === 'finder') {
      setActiveLocation(locations.work);
    }

    openWindow(type);
    setIsMobileMenuOpen(false);
  };

  const handleIconClick = ({ type, action }) => {
    if (!type) return;
    
    openWindow(type);
    
    if (action === 'about') {
      setActiveLocation(locations.about);
    }
    setIsMobileMenuOpen(false);
  };

  const handleSettingsClick = () => {
    const rect = settingsButtonRef.current?.getBoundingClientRect();
    const event = new CustomEvent('openControlPanel', {
      detail: {
        x: rect?.right || 0,
        y: rect?.bottom || 0
      }
    });
    document.dispatchEvent(event);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div>
          <div className="logo-portfolio-container" ref={logoPortfolioRef}>
            <img src="/images/logo.svg" alt="logo" />
            <div className="portfolio-wrapper" ref={wrapperRef}>
              <p className="font-bold portfolio-text">酷设计</p>
              <div className="portfolio-text-container">
                <div className="overlay-gif" ref={gifRef}></div>
              </div>
            </div>
          </div>
          
          <div className="logo-portfolio-placeholder" ref={logoPortfolioPlaceholderRef}>
          </div>

          <ul>
            {navLinks.map((link) => (
              <NavLink key={link.id} {...link} onClick={() => handleNavLinkClick(link.type)} />
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {navIcons.map(({ id, img, type, action }) => (
              <li key={id} onClick={() => handleIconClick({ type, action })}>
                <img
                  src={img}
                  className={`icon-hover ${type ? 'cursor-pointer' : ''}`}
                  alt={`icon-${id}`}
                />
              </li>
            ))}
            <li ref={settingsButtonRef}>
              <img 
                src="/icons/mode.svg" 
                onClick={handleSettingsClick} 
                className="icon-hover cursor-pointer" 
                alt="settings"
              />
            </li>
          </ul>
          
          <Clock />
          
          <button
            ref={mobileMenuBtnRef}
            className="mobile-menu-btn p-2"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>

        <div className="mobile-menu" style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
          <ul className="flex flex-col gap-2 px-4 m-0 p-0 list-none">
            {navLinks.map((link) => (
              <li key={link.id} className="m-0 p-0">
                <button
                  onClick={() => handleNavLinkClick(link.type)}
                  className="mobile-nav-link text-left px-4 py-3 rounded-lg transition-colors w-full"
                >
                  <span>{link.name}</span>
                </button>
              </li>
            ))}
            <li className="m-0 p-0 border-t border-gray-200 my-2"></li>
            <li className="m-0 p-0">
              <button
                onClick={handleSettingsClick}
                className="mobile-nav-link text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 w-full"
              >
                <img src="/icons/mode.svg" alt="settings" className="w-5 h-5" />
                <span>设置</span>
              </button>
            </li>
            {navIcons.map(({ id, img, type, action }) => {
              const iconNames = {
                2: '搜索',
                3: '音乐',
                4: '关于',
                6: '壁纸'
              };
              return (
                <li key={id} className="m-0 p-0">
                  <button
                    onClick={() => handleIconClick({ type, action })}
                    className="mobile-nav-link text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 w-full"
                  >
                    <img src={img} alt={`icon-${id}`} className="w-5 h-5" />
                    <span>{iconNames[id] || id}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

NavBar.displayName = 'NavBar';

export default NavBar;
