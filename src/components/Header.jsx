import React, { useState } from 'react';

const Header = ({ theme, toggleTheme, setBackground }) => {
  const [showBackgroundSelector, setShowBackgroundSelector] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const backgrounds = [
    { id: 1, name: 'Rhibli', image: 'https://wkphoto.bj.bcebos.com/c75c10385343fbf2020d307aa07eca8065388f42.jpg' },
    { id: 2, name: 'Renowsky', image: 'https://picsum.photos/seed/renowsky/200/200' },
    { id: 3, name: 'Neow 2', image: 'https://picsum.photos/seed/neow2/200/200' },
    { id: 4, name: 'Office 2', image: 'https://picsum.photos/seed/office2/200/200' },
    { id: 5, name: 'ReNerd', image: 'https://picsum.photos/seed/renerd/200/200' },
    { id: 6, name: 'RenowStreet', image: 'https://picsum.photos/seed/renowstreet/200/200' },
    { id: 7, name: 'Renownight', image: 'https://picsum.photos/seed/renownight/200/200' },
    { id: 8, name: 'Renius', image: 'https://picsum.photos/seed/renius/200/200' },
    { id: 9, name: 'RenowTale', image: 'https://picsum.photos/seed/renowtale/200/200' },
    { id: 10, name: 'Portrait', image: 'https://picsum.photos/seed/portrait/200/200' },
    { id: 11, name: 'Renowbli', image: 'https://picsum.photos/seed/renowbli/200/200' },
    { id: 12, name: 'Redoh', image: 'https://picsum.photos/seed/redoh/200/200' },
  ];

  return (
    <>
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 max-w-4xl rounded-full shadow-sm liquid-glass ${theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center mr-5">
              <svg width="32" height="32" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                <path d="M600 0C931.371 0 1200 268.629 1200 600C1200 931.371 931.371 1200 600 1200C268.629 1200 0 931.371 0 600C0 268.629 268.629 0 600 0Z" fill="black" stroke="black" strokeWidth="2"/>
                <path d="M311 918.33H473.11L596.83 600.17L473.11 282H311V918.33Z" fill="white" stroke="white" strokeWidth="2"/>
                <path d="M727.22 918.33H889.22V727.36L603.44 600.17L727.22 918.33Z" fill="white" stroke="white" strokeWidth="2"/>
                <path d="M603.44 600.17L889.67 470.94V282H727.33L603.44 600.17Z" fill="white" stroke="white" strokeWidth="2"/>
              </svg>
            </a>
            <nav className="hidden md:flex space-x-[30px] mr-[30px]">
              <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">应用</a>
              <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">媒体</a>
              <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">音乐</a>
              <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">服务</a>
              <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">活动</a>
              <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">赞赏</a>
            </nav>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {showMobileMenu ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setShowBackgroundSelector(!showBackgroundSelector)} 
                className="ml-[50px] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Changer le fond"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </button>
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Changer le thème"
              >
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 移动端菜单 */}
      {showMobileMenu && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-md rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-4`}>
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">应用</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">媒体</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">音乐</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">服务</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">活动</a>
            <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">赞赏</a>
          </nav>
        </div>
      )}

      {/* 背景选择器 */}
      {showBackgroundSelector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className={`rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto liquid-glass ${theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Sélectionner un fond d'écran</h2>
              <button 
                onClick={() => setShowBackgroundSelector(false)} 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-medium"
              >
                Fermer ×
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {backgrounds.map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => {
                    setBackground(bg);
                    setShowBackgroundSelector(false);
                  }}
                  className="relative group overflow-hidden rounded-xl aspect-square"
                >
                  <img 
                    src={bg.image} 
                    alt={bg.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                    {bg.name}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button 
                onClick={() => {
                  setBackground(null);
                  setShowBackgroundSelector(false);
                }}
                className="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-full"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;