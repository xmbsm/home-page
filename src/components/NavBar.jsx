import { navIcons, navLinks, locations } from "#constants";
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';
import { useEffect, useRef, useCallback, useState } from "react";
import React from "react";
import Clock from './Clock';
import NavLink from "./NavLink";

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

const NavBar = React.memo(() => {
  const openWindow = useWindowStore(state => state.openWindow);
  const setActiveLocation = useLocationStore(state => state.setActiveLocation);

  const wrapperRef = useRef(null);
  const gifRef = useRef(null);
  const logoPortfolioRef = useRef(null);
  const logoPortfolioPlaceholderRef = useRef(null);
  const settingsButtonRef = useRef(null);

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
  
  const handleNavLinkClick = useCallback((type) => {
    if (!type) return;

    if (type === 'finder') {
      setActiveLocation(locations.work);
    }

    openWindow(type);
  }, [openWindow, setActiveLocation]);

  const handleIconClick = useCallback(({ type, action }) => {
    if (!type) return;
    
    openWindow(type);
    
    if (action === 'about') {
      setActiveLocation(locations.about);
    }
  }, [openWindow, setActiveLocation]);

  const handleSettingsClick = () => {
    const rect = settingsButtonRef.current?.getBoundingClientRect();
    const event = new CustomEvent('openControlPanel', {
      detail: {
        x: rect?.right || 0,
        y: rect?.bottom || 0
      }
    });
    document.dispatchEvent(event);
  };

  return (
    <>
      <nav>
        <div>
          <div className="logo-portfolio-container" ref={logoPortfolioRef}>
            <img src="/images/logo.svg" alt="logo" />
            <div className="portfolio-wrapper" ref={wrapperRef}>
              <p className="font-bold portfolio-text">酷设计</p>
              {!isMobile && (
                <div className="portfolio-text-container">
                  <div className="overlay-gif" ref={gifRef}></div>
                </div>
              )}
            </div>
          </div>
          
          {!isMobile && (
            <div className="logo-portfolio-placeholder" ref={logoPortfolioPlaceholderRef}>
            </div>
          )}

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
        </div>
      </nav>
    </>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
