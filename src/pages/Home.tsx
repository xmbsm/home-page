import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
  const { toggleTheme, isDark } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  
  // Handle scroll event to show/hide back to top button and update scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    // Initialize window height
    setWindowHeight(window.innerHeight);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Product data
  const products = [
    {
      id: 1,
      name: "矢量logo下载",
      url: "https://logo.kusheji.com",
      gradient: "from-blue-400 to-indigo-500",
      images: [
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=logo%20design%2C%20modern%20vector%20graphic%2C%20professional%20design&image_size=square",
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vector%20illustration%2C%20abstract%20design%2C%20brand%20identity&image_size=square",
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20logo%2C%20clean%20design%2C%20corporate%20branding&image_size=square"
      ]
    },
    {
      id: 2,
      name: "小酷字体",
      url: "https://ziti.kusheji.com",
      gradient: "from-purple-400 to-pink-500",
      images: [
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=font%20design%2C%20modern%20typography%2C%20professional%20fonts&image_size=square",
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=typography%20poster%2C%20creative%20font%20arrangement&image_size=square",
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20font%20design%2C%20elegant%20characters&image_size=square"
      ]
    },
    {
      id: 3,
      name: "素材站",
      url: "https://sucai.kusheji.com",
      gradient: "from-blue-300 to-blue-400",
      images: [
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=material%20website%2C%20design%20resources%2C%20blue%20color&image_size=square",
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=design%20materials%2C%20web%20interface%2C%20modern%20design&image_size=square",
        "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20resources%2C%20web%20page%2C%20resource%20display&image_size=square"
      ]
    }
  ];
  
  // Handle next product
  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };
  
  // Handle previous product
  const handlePrevProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };
  
  // Get products to display based on screen size
  const getDisplayedProducts = () => {
    // For PC: show 3 products (current + next 2, with wrap around)
    // For mobile: show 1 product (current)
    const displayedProducts = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentProductIndex + i) % products.length;
      displayedProducts.push(products[index]);
    }
    return displayedProducts;
  };
  
  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-1.5 backdrop-blur-md transition-all duration-300 ${scrollY >= windowHeight ? 'bg-opacity-30' : 'bg-opacity-0'}`} style={{ backgroundColor: scrollY >= windowHeight ? (isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(255, 255, 255, 0.3)') : 'transparent' }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M600 0C931.371 0 1200 268.629 1200 600C1200 931.371 931.371 1200 600 1200C268.629 1200 0 931.371 0 600C0 268.629 268.629 0 600 0ZM311 918.33H473.11L596.83 600.17L473.11 282H311V918.33ZM727.22 918.33H889.22V727.36L603.44 600.17L727.22 918.33ZM603.44 600.17L889.67 470.94V282H727.33L603.44 600.17Z" fill={isDark ? 'white' : 'black'}/>
              </svg>
            </div>
            <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>酷设计</span>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hot" className={`text-sm font-medium transition-colors ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>热门</a>
            <a href="#logo" className={`text-sm font-medium transition-colors ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>logo下载</a>
            <a href="#apps" className={`text-sm font-medium transition-colors ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>推荐应用</a>
            <a href="#fonts" className={`text-sm font-medium transition-colors ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>免费字体</a>
            <a href="#dynamic" className={`text-sm font-medium transition-colors ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>动态</a>
            <a href="#music" className={`text-sm font-medium transition-colors ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>音乐</a>
            <a href="#materials" className={`text-sm font-medium transition-colors ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>素材</a>
            <a href="#circle" className={`text-sm font-medium transition-colors ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}>圈子</a>
          </nav>
          
          <button 
            onClick={toggleTheme} 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            aria-label={isDark ? "切换到白天模式" : "切换到夜晚模式"}
          >
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>
        </header>
      
      {/* Hero Section */}
      <section className={`relative min-h-screen overflow-hidden flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-blue-50 to-gray-300'}`}>
        
        {/* Background decorative elements */}
        <div className={`absolute inset-0 overflow-hidden h-full ${isDark ? 'bg-[rgb(17_24_39)]' : ''}`}>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/30 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-bl from-pink-400/25 to-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-400/25 to-teal-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-[1280px] h-full flex flex-col items-center justify-center">
          {/* Main title */}
          <div className="text-center mb-20">
            <h1 className={`text-6xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-wider`} style={{ color: isDark ? 'white' : '#2d2d2d', fontFamily: '卓特自由体' }}>
              每天都有新发现
            </h1>
            <p className={`text-sm ${isDark ? 'text-white/90' : 'text-[#2d2d2d]/90'}`}>
              百家号全面升级，实现内容、粉丝、认证、权益的多平台打通
            </p>
          </div>
          
          {/* Platform icons */}
          <div className="w-full flex justify-center px-4">
            <div className={`max-w-4xl w-full flex items-center rounded-full px-4 py-4 ${isDark ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow-lg'}`}>
              <div className="flex overflow-hidden w-full">
                <div className="flex gap-4 animate-scroll w-max">
                  {[
                    { icon: '🐾', name: '百度' },
                    { icon: '🎬', name: '好看视频' },
                    { icon: '▶️', name: '爱奇艺' },
                    { icon: '🔴', name: '西瓜视频' },
                    { icon: '🎵', name: '抖音' },
                    { icon: '🤔', name: '知乎' },
                    { icon: '✨', name: '小红书' },
                    { icon: '🔗', name: '豆瓣' },
                    { icon: '📜', name: '简书' },
                    { icon: '💹', name: '同花顺' },
                    { icon: '⭐', name: '什么值得买' },
                    { icon: '👨‍💼', name: 'TA说' },
                    { icon: '🎯', name: '秒懂' },
                  ].map((platform, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${isDark ? 'bg-gray-700 border border-gray-600' : 'bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm'}`}>
                        {platform.icon}
                      </div>
                      <span className={`text-xs mt-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{platform.name}</span>
                    </div>
                  ))}
                  {/* Duplicate items for seamless scrolling */}
                  {[
                    { icon: '🐾', name: '百度' },
                    { icon: '🎬', name: '好看视频' },
                    { icon: '▶️', name: '爱奇艺' },
                    { icon: '🔴', name: '西瓜视频' },
                    { icon: '🎵', name: '抖音' },
                    { icon: '🤔', name: '知乎' },
                    { icon: '✨', name: '小红书' },
                    { icon: '🔗', name: '豆瓣' },
                    { icon: '📜', name: '简书' },
                    { icon: '💹', name: '同花顺' },
                    { icon: '⭐', name: '什么值得买' },
                    { icon: '👨‍💼', name: 'TA说' },
                    { icon: '🎯', name: '秒懂' },
                  ].map((platform, i) => (
                    <div key={`duplicate-${i}`} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${isDark ? 'bg-gray-700 border border-gray-600' : 'bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm'}`}>
                        {platform.icon}
                      </div>
                      <span className={`text-xs mt-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10 animate-bounce-slow">
          <div className={`flex flex-col items-center ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
            <span className="text-xs mb-1">向下滚动</span>
            <div className={`w-6 h-8 border ${isDark ? 'border-white/60' : 'border-gray-400'} rounded-full flex justify-center pt-1.5`}>
              <div className={`w-1 h-2 ${isDark ? 'bg-white/80' : 'bg-gray-600'} rounded-full animate-scroll-down`}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Creator Plans Section */}
      <section id="hot" className={`py-24 pt-32 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>主要推荐的产品</h2>
            <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>好奇领航计划、金芒计划、百家榜、匠心计划、优选计划</p>
          </div>
          
          {/* Mobile view: only show the first product */}
          <div className="block md:hidden w-full">
            <div className={`group rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-xl' : 'bg-white backdrop-blur-lg border border-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]'}`}>
              {/* URL bar */}
              <div className="flex items-center justify-between mb-6 relative">
                <div className="flex items-center">
                  <div className={`flex items-center ${isDark ? 'bg-white/10' : 'bg-gray-50'} rounded-full px-2.5 py-1 mr-2.5`}>
                    <svg className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} width="14" height="14" viewBox="0 0 1024 1024" fill="currentColor">
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 224c-29.5 0-58.3-2.6-86.2-7.5C452 175.3 491.4 120 512 120c20.6 0 60 55.3 86.2 160.5-27.9 4.8-56.7 7.5-86.2 7.5z m140.7-20.4c-13.6-55.7-31.8-102.6-53.1-137.4 63.6 14.6 121.3 44.7 169 86.1-35.3 21.8-74.3 39.1-115.9 51.3z m-281.4 0c-41.6-12.2-80.5-29.6-115.8-51.3 47.7-41.4 105.3-71.4 168.9-86-21.3 34.7-39.4 81.6-53.1 137.3zM679.5 484c-1.3-57.5-6.7-111.9-15.4-161.4 52.5-15 101.3-37.3 144.8-65.8 53.4 62 87.5 140.7 93.7 227.2H679.5z m-558.1 0c6.2-86.4 40.2-165.1 93.5-227.1 43.5 28.5 92.4 50.6 145 65.6-8.7 49.6-14.1 104-15.4 161.5H121.4z m279.1 0c1.3-55.7 6.4-105.4 13.9-148.7 31.6 5.6 64.1 8.7 97.6 8.7 33.4 0 66-3 97.6-8.6 7.5 43.3 12.5 93 13.9 148.6h-223z m408.4 283.2c-43.5-28.5-92.3-50.8-144.8-65.8 8.7-49.6 14.1-104 15.4-161.4h223.1c-6.2 86.5-40.3 165.2-93.7 227.2z m-394.5-78.5c-7.5-43.3-12.5-93-13.9-148.7h222.9c-1.3 55.6-6.3 105.3-13.9 148.6C578 683 545.4 680 512 680c-33.4 0-66 3.1-97.6 8.7zM215 767.1c-53.3-62-87.4-140.7-93.5-227.1h223.1c1.3 57.5 6.7 111.9 15.4 161.5-52.6 15-101.5 37.1-145 65.6zM512 904c-20.6 0-60-55.3-86.2-160.5 27.9-4.8 56.7-7.5 86.2-7.5s58.3 2.7 86.2 7.5C572 848.7 532.6 904 512 904z m87.6-10.2c21.3-34.8 39.5-81.7 53.1-137.4 41.7 12.2 80.6 29.5 115.9 51.2-47.7 41.5-105.4 71.6-169 86.2z m-175.2 0c-63.6-14.6-121.2-44.6-168.9-86 35.2-21.8 74.1-39.1 115.8-51.3 13.7 55.6 31.8 102.5 53.1 137.3z"/>
                    </svg>
                    <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{getDisplayedProducts()[0].url.replace('https://', '')}</span>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{getDisplayedProducts()[0].name}</span>
                </div>
                <a href={getDisplayedProducts()[0].url} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20 border border-white/20' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'}">
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>↗</span>
                </a>
              </div>
              
              {/* Browser window */}
              <div className="rounded-xl overflow-hidden">
                {/* Browser header */}
                <div className={`${isDark ? 'bg-white/10' : 'bg-gray-50'} px-4 py-2 border-b ${isDark ? 'border-white/10' : 'border-gray-200'} flex items-center`}>
                  <div className="flex space-x-1.5 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
                
                {/* Browser content */}
                <div className={`relative h-72 bg-gradient-to-br ${getDisplayedProducts()[0].gradient}`}>
                  {/* Images */}
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex space-x-2">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform rotate-6">
                      <img src={getDisplayedProducts()[0].images[0]} alt="Product image 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform -rotate-3">
                      <img src={getDisplayedProducts()[0].images[1]} alt="Product image 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform rotate-12">
                      <img src={getDisplayedProducts()[0].images[2]} alt="Product image 3" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop view: show all 3 products */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 w-full">
            {getDisplayedProducts().map((product) => (
              <div key={product.id} className={`group rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-xl' : 'bg-white backdrop-blur-lg border border-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]'}`}>
                {/* URL bar */}
                <div className="flex items-center justify-between mb-6 relative">
                  <div className="flex items-center">
                    <div className={`flex items-center ${isDark ? 'bg-white/10' : 'bg-gray-50'} rounded-full px-2.5 py-1 mr-2.5`}>
                      <svg className={`mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} width="14" height="14" viewBox="0 0 1024 1024" fill="currentColor">
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 224c-29.5 0-58.3-2.6-86.2-7.5C452 175.3 491.4 120 512 120c20.6 0 60 55.3 86.2 160.5-27.9 4.8-56.7 7.5-86.2 7.5z m140.7-20.4c-13.6-55.7-31.8-102.6-53.1-137.4 63.6 14.6 121.3 44.7 169 86.1-35.3 21.8-74.3 39.1-115.9 51.3z m-281.4 0c-41.6-12.2-80.5-29.6-115.8-51.3 47.7-41.4 105.3-71.4 168.9-86-21.3 34.7-39.4 81.6-53.1 137.3zM679.5 484c-1.3-57.5-6.7-111.9-15.4-161.4 52.5-15 101.3-37.3 144.8-65.8 53.4 62 87.5 140.7 93.7 227.2H679.5z m-558.1 0c6.2-86.4 40.2-165.1 93.5-227.1 43.5 28.5 92.4 50.6 145 65.6-8.7 49.6-14.1 104-15.4 161.5H121.4z m279.1 0c1.3-55.7 6.4-105.4 13.9-148.7 31.6 5.6 64.1 8.7 97.6 8.7 33.4 0 66-3 97.6-8.6 7.5 43.3 12.5 93 13.9 148.6h-223z m408.4 283.2c-43.5-28.5-92.3-50.8-144.8-65.8 8.7-49.6 14.1-104 15.4-161.4h223.1c-6.2 86.5-40.3 165.2-93.7 227.2z m-394.5-78.5c-7.5-43.3-12.5-93-13.9-148.7h222.9c-1.3 55.6-6.3 105.3-13.9 148.6C578 683 545.4 680 512 680c-33.4 0-66 3.1-97.6 8.7zM215 767.1c-53.3-62-87.4-140.7-93.5-227.1h223.1c1.3 57.5 6.7 111.9 15.4 161.5-52.6 15-101.5 37.1-145 65.6zM512 904c-20.6 0-60-55.3-86.2-160.5 27.9-4.8 56.7-7.5 86.2-7.5s58.3 2.7 86.2 7.5C572 848.7 532.6 904 512 904z m87.6-10.2c21.3-34.8 39.5-81.7 53.1-137.4 41.7 12.2 80.6 29.5 115.9 51.2-47.7 41.5-105.4 71.6-169 86.2z m-175.2 0c-63.6-14.6-121.2-44.6-168.9-86 35.2-21.8 74.1-39.1 115.8-51.3 13.7 55.6 31.8 102.5 53.1 137.3z"/>
                      </svg>
                      <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{product.url.replace('https://', '')}</span>
                    </div>
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{product.name}</span>
                  </div>
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20 border border-white/20' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'}">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>↗</span>
                  </a>
                </div>
                
                {/* Browser window */}
                <div className="rounded-xl overflow-hidden">
                  {/* Browser header */}
                  <div className={`${isDark ? 'bg-white/10' : 'bg-gray-50'} px-4 py-2 border-b ${isDark ? 'border-white/10' : 'border-gray-200'} flex items-center`}>
                    <div className="flex space-x-1.5 mr-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                  
                  {/* Browser content */}
                  <div className={`relative h-72 bg-gradient-to-br ${product.gradient}`}>
                    {/* Images */}
                    <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex space-x-2">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform rotate-6">
                        <img src={product.images[0]} alt="Product image 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform -rotate-3">
                        <img src={product.images[1]} alt="Product image 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform rotate-12">
                        <img src={product.images[2]} alt="Product image 3" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={handlePrevProduct}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:bg-gray-700/80 hover:scale-110' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow hover:bg-white/50 hover:scale-110 hover:shadow-md'}`}
              aria-label="Previous product"
            >
              ‹
            </button>
            <button 
              onClick={handleNextProduct}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:bg-gray-700/80 hover:scale-110' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow hover:bg-white/50 hover:scale-110 hover:shadow-md'}`}
              aria-label="Next product"
            >
              ›
            </button>
          </div>
        </div>
      </section>
      

      
      {/* New Section */}
      <section className="py-32 flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-950 min-h-[840px]">
        <div className="w-full max-w-6xl px-4">
          {/* Background elements */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-4 text-yellow-400 text-sm font-medium">10000+ 矢量标志</div>
            <h3 className="text-4xl font-bold text-white mb-4">专业矢量标志，<br />一键下载。</h3>
            <p className="text-gray-300 text-sm mb-8 max-w-md">海量矢量标志资源，支持多种格式下载。<br />专业设计，可直接商用，满足各种设计需求。</p>
            <div className="flex space-x-4 mb-12">
              <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all">浏览标志</button>
              <button className="px-6 py-2 rounded-full bg-yellow-400 text-gray-900 text-sm font-medium hover:bg-yellow-300 transition-all">免费下载</button>
            </div>
            
            {/* Device showcase */}
            <div className="relative w-full max-w-4xl">
              {/* Laptop */}
              <div className="relative z-20 mx-auto">
                <div className="w-64 h-40 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-lg flex items-center justify-center">
                  <div className="w-56 h-32 bg-black rounded flex flex-col items-center justify-center">
                    <div className="text-white text-xs mb-2">2024年12月14日</div>
                    <div className="text-white text-3xl">🙏</div>
                    <div className="text-white text-xs mt-2">功德+1</div>
                  </div>
                </div>
                <div className="w-72 h-2 bg-gray-800 mx-auto rounded-b-md"></div>
              </div>
              
              {/* Phone left */}
              <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-24 h-48 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex flex-col items-center justify-center px-2">
                  <div className="w-4 h-1 bg-black rounded-full mb-2"></div>
                  <div className="w-full h-36 bg-black rounded flex items-center justify-center">
                    <div className="text-white text-2xl">🐦</div>
                  </div>
                </div>
              </div>
              
              {/* Watch */}
              <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center border-2 border-gray-800">
                  <div className="text-white text-sm">🔥</div>
                </div>
              </div>
              
              {/* Tablet right */}
              <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-40 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center px-2">
                  <div className="w-28 h-32 bg-white rounded flex items-center justify-center border border-gray-300">
                    <div className="text-gray-800 text-2xl">🪔</div>
                  </div>
                </div>
              </div>
              
              {/* Floating icons */}
              <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-yellow-600 text-sm">🍯</div>
                </div>
              </div>
              
              <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-red-500 text-sm">🥁</div>
                </div>
              </div>
              
              <div className="absolute top-0 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-blue-600 text-sm">🐳</div>
                </div>
              </div>
              
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-green-600 text-sm">🦌</div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-orange-600 text-sm">🔥</div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-purple-600 text-sm">🤡</div>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-1/3 transform translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-red-600 text-sm">🧨</div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-pink-600 text-sm">💋</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Content Section */}
      <section id="logo" className={`py-24 pt-32 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>logo下载</h2>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>海量矢量标志，一键下载</p>
            </div>
            <a href="#" className={`text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline flex items-center`}>
              查看全部 <span className="ml-1">›</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'}`}>
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-white text-xl font-bold">10000+ 矢量标志</h3>
                    <p className="text-gray-300 text-sm mt-2">专业矢量标志，一键下载，可直接商用</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mr-3">L</div>
                  <div>
                    <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>矢量标志库</div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>专业矢量标志，可直接商用</div>
                  </div>
                </div>
                <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-800'}`}>下载</button>
              </div>
            </div>
            
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'}`}>
              <div className="h-48 bg-gradient-to-r from-green-600 to-teal-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-white text-xl font-bold">品牌标志生成器</h3>
                    <p className="text-gray-300 text-sm mt-2">输入品牌名称，自动生成多种风格的标志设计</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white mr-3">G</div>
                  <div>
                    <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>标志生成器</div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>自动生成多种风格的标志设计</div>
                  </div>
                </div>
                <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-800'}`}>使用</button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-4">
              <button className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'}`}>‹</button>
              <button className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-600 text-white' : 'bg-blue-100 text-blue-600'}`}>›</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section id="apps" className={`py-24 pt-32 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>应用</h2>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>致力于构建趁手小工具</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🐟</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>洪给敲木鱼</h3>
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">官方</span>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>将世间万物化作电子木鱼</p>
              <div className="flex items-center justify-between">
                <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>无限制</span>
              </div>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🌐</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>DNS测速</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>专业的DNS测速工具</p>
              <div className="flex items-center justify-between">
                <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>无限制</span>
              </div>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🥗</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>轻节食</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>科学制定断食计划</p>
              <div className="flex items-center justify-between">
                <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>无限制</span>
              </div>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">📏</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>比例计</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>设计师的高效比例计算工具</p>
              <div className="flex items-center justify-between">
                <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>无限制</span>
              </div>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">📄</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>DelSpace</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>文本自动化处理工具</p>
              <div className="flex items-center justify-between">
                <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>无限制</span>
              </div>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🐱</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>摸鱼</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>可自定义的屏幕保护动画工具</p>
              <div className="flex items-center justify-between">
                <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>无限制</span>
              </div>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🖼️</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>洪给压图</h3>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">精品</span>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>图片批量压缩与处理工具</p>
              <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>工具</h2>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>创造更多改变生产的在线工具</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🖊️</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>洪给电子章</h3>
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">官方</span>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>给PDF轻松盖章、骑缝章</p>
              <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🏷️</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>洪给图标助手</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>图标线下与生成</p>
              <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🔒</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>洪给文本盲水印</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>让简单的文本下藏神秘信息</p>
              <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🌐</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>HeoNAT</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>检测你的网络映射地址</p>
              <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🎬</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>HeoFcpxml</h3>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">精品</span>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>将你的CPXML转换为RRT</p>
              <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
            </div>
            
            <div className={`rounded-lg p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-shadow hover:shadow-md`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mr-3">
                  <div className="text-xl text-white">🧰</div>
                </div>
                <div>
                  <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>HeoTools</h3>
                </div>
              </div>
              <p className={`text-xs mb-3 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>常用在线小工具集合</p>
              <button className={`px-3 py-1.5 rounded-full text-xs ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="fonts" className="py-24 pt-32 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 max-w-[1280px] flex flex-col items-center text-center">
          <div className="mb-8">
            <span className="text-yellow-300 text-sm font-medium">免费字体下载</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">海量免费字体，<br />一键下载使用。</h2>
          <p className="text-white/80 text-sm mb-8 max-w-md">精选优质免费字体，支持多种格式，一键下载即可使用，满足各种设计需求。</p>
          <div className="flex space-x-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all">浏览字体</button>
            <button className="px-6 py-2 rounded-full bg-transparent text-white text-sm hover:bg-white/10 transition-all">热门字体</button>
          </div>
          <div className="relative w-full max-w-4xl">
            <div className="w-full h-80 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-11/12 h-14 bg-gray-800 rounded-t-lg flex items-center px-4">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 h-6 bg-gray-700 rounded-full px-3 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <div className="text-xs text-gray-400">https://fonts.kusheji.com</div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11/12 h-64 bg-purple-100 rounded-b-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔤</div>
                    <p className="text-purple-800 font-medium">免费字体下载</p>
                    <p className="text-xs text-purple-600 mt-2">精选优质字体，一键下载使用</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dynamic Section */}
      <section id="dynamic" className={`py-24 pt-32 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>最新的文章和动态</h2>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>来自博客</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
              <div className="h-40 bg-gray-400 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">ChatGPT</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-lg">🔗</div>
                </div>
              </div>
              <div className="p-4">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>软件推荐</span>
                <h3 className={`text-lg font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>ChatGPT Image-2 上手：杀死比赛！</h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>设计师这下子真的可以解放双手了</p>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2026年4月21日</span>
              </div>
            </div>
            
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
              <div className="h-40 bg-red-400 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">微信</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-lg">🤖</div>
                </div>
              </div>
              <div className="p-4">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>经验分享</span>
                <h3 className={`text-lg font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>龙虾与微信聊天记录结合：群内容总结、整理和提取关键内容实在是太方便</h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}></p>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2026年4月20日</span>
              </div>
            </div>
            
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
              <div className="h-40 bg-purple-400 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">洪给压图</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-lg">🖼️</div>
                </div>
              </div>
              <div className="p-4">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>我的项目</span>
                <h3 className={`text-lg font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>洪给压图发布！批量转图片格式压缩图片工具 (Mac/Window:</h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}></p>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2026年4月15日</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="flex space-x-4">
              <button className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'}`}>‹</button>
              <button className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-600 text-white' : 'bg-blue-100 text-blue-600'}`}>›</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>媒体</h2>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>为互联网共享精神添砖加瓦</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'} flex flex-col items-center text-center`}>
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 relative">
                <div className="text-2xl">👁️</div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">热门</span>
                </div>
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>博客</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>分享设计与科技生活</p>
              <button className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>访问</button>
            </div>
            
            <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'} flex flex-col items-center text-center`}>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 relative">
                <div className="text-2xl">👁️</div>
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>爱发电</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>分享有趣又有料的文章与资源</p>
              <div className="flex space-x-2">
                <button className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>访问</button>
                <button className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-600'}`}>订阅</button>
              </div>
            </div>
            
            <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'} flex flex-col items-center text-center`}>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 relative">
                <div className="text-2xl">👁️</div>
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>图集</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>分享生活的小事</p>
              <button className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>访问</button>
            </div>
            
            <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'} flex flex-col items-center text-center`}>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 relative">
                <div className="text-2xl">👁️</div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">热门</span>
                </div>
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>公众号</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>第一时间获取动态</p>
              <button className={`px-4 py-2 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>访问</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Music Section */}
      <section id="music" className={`py-24 pt-32 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>音乐</h2>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>创造能打动人心的音乐</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 ${isDark ? 'bg-gray-800' : 'bg-white shadow-sm'} rounded-2xl p-6`}>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="w-40 h-40 bg-black rounded-lg flex items-center justify-center">
                  <div className="text-4xl text-white">🎵</div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>还在写的人</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>周杰伦</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>⏮</button>
                    <button className={`w-12 h-12 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>▶</button>
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>⏭</button>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-500'}`}>0:00</span>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-500'}`}>4:34</span>
                    </div>
                    <div className={`w-full h-1.5 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div className="h-full w-0 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className={`text-sm font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>歌词</h4>
                <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                  <p className="text-sm">作曲: 周杰伦</p>
                  <p className="text-sm">作词: 周杰伦</p>
                  <p className="text-sm mt-4">工位一排一排地空成走廊</p>
                  <p className="text-sm">熟悉名字慢慢退出那扇窗</p>
                </div>
              </div>
            </div>
            
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white shadow-sm'} rounded-2xl p-6`}>
              <h3 className={`text-lg font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>播放列表</h3>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                      <div className="text-xs text-white">🎵</div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>还在写的人</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>周杰伦</p>
                    </div>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                      <div className="text-xs text-white">🎵</div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>未财来财</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>周杰伦</p>
                    </div>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                      <div className="text-xs text-white">🎵</div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>时光与你</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>周杰伦</p>
                    </div>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                      <div className="text-xs text-white">🎵</div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>山路汤圆</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>周杰伦</p>
                    </div>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                      <div className="text-xs text-white">🎵</div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>山水市长</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>周杰伦</p>
                    </div>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                      <div className="text-xs text-white">🎵</div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>凌晨三点的乡愁</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>周杰伦</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>生活</h2>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>记录生活的点滴</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'} flex flex-col items-center text-center`}>
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <div className="text-2xl">📸</div>
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>摄影</h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>捕捉美好瞬间</p>
            </div>
            
            <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'} flex flex-col items-center text-center`}>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <div className="text-2xl">🍳</div>
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>美食</h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>探索味蕾之旅</p>
            </div>
            
            <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'} flex flex-col items-center text-center`}>
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <div className="text-2xl">✈️</div>
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>旅行</h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>领略世界风情</p>
            </div>
            
            <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-700' : 'bg-white shadow-sm'} flex flex-col items-center text-center`}>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <div className="text-2xl">🎨</div>
              </div>
              <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>艺术</h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>感受创意魅力</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Materials Section */}
      <section id="materials" className="py-24 pt-32 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 max-w-[1280px] text-center">
          <div className="mb-8">
            <span className="text-yellow-400 text-sm font-medium">海外商业设计素材下载</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">海量海外素材，<br />一键下载使用。</h2>
          <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">精选海外优质商业设计素材，支持多种格式下载，一键获取专业设计资源。</p>
          <div className="flex space-x-4 mb-16 justify-center">
            <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all">浏览素材</button>
            <button className="px-6 py-2 rounded-full bg-transparent text-white text-sm hover:bg-white/10 transition-all">会员下载</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
              <h3 className="font-medium text-white mb-2">海外商业海报模板</h3>
              <p className="text-white/70 text-xs mb-3">精选海外优质商业海报模板，可直接编辑使用，适用于各类商业宣传场景。</p>
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-xs">2025年12月14日</span>
                <span className="text-white/50 text-xs">下载 1.2k</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
              <h3 className="font-medium text-white mb-2">高端品牌标志素材</h3>
              <p className="text-white/70 text-xs mb-3">海外高端品牌标志设计素材，适用于各类商业场景，支持多种格式下载。</p>
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-xs">2025年12月13日</span>
                <span className="text-white/50 text-xs">下载 980</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
              <h3 className="font-medium text-white mb-2">商业插画集</h3>
              <p className="text-white/70 text-xs mb-3">精选海外商业插画素材，风格多样，适用于各类设计项目，支持多种格式下载。</p>
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-xs">2025年12月12日</span>
                <span className="text-white/50 text-xs">下载 1.5k</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
              <h3 className="font-medium text-white mb-2">UI设计组件库</h3>
              <p className="text-white/70 text-xs mb-3">海外优质UI设计组件库，包含多种界面元素，可直接应用于项目中。</p>
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-xs">2025年12月11日</span>
                <span className="text-white/50 text-xs">下载 850</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
              <h3 className="font-medium text-white mb-2">商业摄影图片库</h3>
              <p className="text-white/70 text-xs mb-3">海外商业摄影图片库，包含多种场景的高质量图片，可用于商业宣传。</p>
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-xs">2025年12月10日</span>
                <span className="text-white/50 text-xs">下载 1.1k</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
              <h3 className="font-medium text-white mb-2">3D模型素材包</h3>
              <p className="text-white/70 text-xs mb-3">海外3D模型素材包，包含多种类型的3D模型，可用于各类设计项目。</p>
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-xs">2025年12月9日</span>
                <span className="text-white/50 text-xs">下载 720</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Circle Section */}
      <section id="circle" className={`py-24 pt-32 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 max-w-[1280px] flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>六大内容变现手段 全面打通内容商业生态</h2>
            <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>流量收益、内容电商、付费专栏、内容营销、付费圈子、赞赏功能</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: '流量收益', icon: '💎' },
              { title: '内容电商', icon: '🛒' },
              { title: '付费专栏', icon: '📦' },
              { title: '内容营销', icon: '🎯' },
              { title: '付费圈子', icon: '👥' },
              { title: '赞赏功能', icon: '👏' },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-10 text-center transition-shadow ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white shadow-sm hover:shadow-md'}`}>
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className={`font-medium mb-4 text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                  {item.title === '流量收益' && '为创作者开通流量分成计划，作者可以享受阅读分成激励。'}
                  {item.title === '内容电商' && '作者在图文、短视频等内容场景带货，激发内容创作者电商创作热情。'}
                  {item.title === '付费专栏' && '打通情感与需求，为创作者提供便捷、知识的、清晰的内容创作平台。'}
                  {item.title === '内容营销' && '作者可通过百家号各渠道曝光专项招商，挖掘内容营销商业价值。'}
                  {item.title === '付费圈子' && '为有社群分享意愿的创作者提供变现功能的内容创作平台。'}
                  {item.title === '赞赏功能' && '广大用户和看客的作者可以鼓励创作，以现金的形式表达对原创创作的喜爱。'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Creators Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 max-w-[1280px] flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>460万+创作者共同选择</h2>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <button className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
              ‹
            </button>
            <button className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
              ›
            </button>
            
            <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-16">
              {
                [
                  '水彩仙人',
                  '阿杰Ajee',
                  '美食大冒险',
                  '王月亮',
                  '山姆英语',
                  '西西小调',
                  '摄影师安先生',
                  '济南公安',
                  '蓝鲸财经',
                  '真实故事计划',
                  '十点读书',
                  '虎扑足球',
                ].map((creator, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-3">
                      {creator[0]}
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{creator}</span>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-base font-medium">
              加入百家号
            </button>
          </div>
        </div>
      </section>
      
      {/* Heo Family Section */}
      <section className="py-24 bg-gradient-to-b from-orange-400 to-red-600 text-white">
        <div className="container mx-auto px-4 max-w-[1280px] text-center">
          <div className="mb-8">
            <span className="text-yellow-300 text-sm font-medium">Heo Family</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">能表达，<br/>更会表达。</h2>
          <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">更多精彩的形象，<br/>为简单的应用带来更多乐趣。</p>
          <div className="flex space-x-4 mb-16 justify-center">
            <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all">进一步了解</button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-800 text-sm hover:bg-white/90 transition-all">获取</button>
          </div>
          
          {/* Characters */}
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="flex items-end justify-center gap-8">
              {/* Left character - Pig */}
              <div className="relative z-10">
                <div className="w-32 h-32 rounded-full bg-yellow-200 flex items-center justify-center">
                  <div className="text-6xl">🐷</div>
                </div>
              </div>
              
              {/* Center character - Panda */}
              <div className="relative z-20">
                <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center">
                  <div className="text-7xl">🐼</div>
                </div>
              </div>
              
              {/* Right character - Emoji */}
              <div className="relative z-10">
                <div className="w-48 h-48 rounded-full bg-yellow-300 flex items-center justify-center">
                  <div className="text-8xl">😍</div>
                </div>
              </div>
            </div>
            
            {/* Center character - Monster (behind) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="w-64 h-64 rounded-full bg-black/20 flex items-center justify-center">
                <div className="text-9xl">👾</div>
              </div>
            </div>
            
            {/* Top character - LPL */}
            <div className="absolute top-0 right-20 z-30">
              <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center">
                <div className="text-5xl">🎮</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
              <div className="w-96 h-96 rounded-full bg-yellow-300/30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services and Themes Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 max-w-[1280px]">
          {/* Services */}
          <div className="mb-16">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>服务</h2>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>为创作者提供所需的基础服务</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>洪墨 AI</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">热门</span>
                </div>
                <p className={`text-sm text-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>构建具有AI优先的先进网站</p>
                <div className="w-32 h-32 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <div className="text-4xl">🤖</div>
                </div>
                <div className="flex space-x-2">
                  <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
                  <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>订制</button>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>洪给星空</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">新品</span>
                </div>
                <p className={`text-sm text-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>通过文章发现更多优秀的博客</p>
                <div className="w-32 h-32 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <div className="text-4xl">✨</div>
                </div>
                <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
              </div>
              
              <div className="flex flex-col items-center">
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>Butterfly魔改</h3>
                <p className={`text-sm text-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>主题美化教程导航站</p>
                <div className="w-32 h-32 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                  <div className="text-4xl">🦋</div>
                </div>
                <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
              </div>
            </div>
          </div>
          
          {/* Themes */}
          <div>
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>主题</h2>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>帮助更多用户构建出非凡的网站</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>洪墨导航</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">新品</span>
                </div>
                <p className={`text-sm text-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>Halo系统的导航主题</p>
                <div className="w-32 h-32 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <div className="text-4xl">🔗</div>
                </div>
                <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>访问</button>
              </div>
              
              <div className="flex flex-col items-center">
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>HeoWeb</h3>
                <p className={`text-sm text-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>静态业务个人主页主题</p>
                <div className="w-32 h-32 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                  <div className="text-4xl">🌐</div>
                </div>
                <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
              </div>
              
              <div className="flex flex-col items-center">
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>HeoMusic</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">热门</span>
                </div>
                <p className={`text-sm text-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>Aplayer播放器主题</p>
                <div className="w-32 h-32 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <div className="text-4xl">🎵</div>
                </div>
                <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
              </div>
              
              <div className="flex flex-col items-center">
                <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>洪墨时光</h3>
                <p className={`text-sm text-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>Typecho图片信息流主题</p>
                <div className="w-32 h-32 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <div className="text-4xl">⏰</div>
                </div>
                <button className={`px-4 py-1.5 rounded-full text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>获取</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`py-10 border-t ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="container mx-auto px-4 max-w-[1280px] flex flex-col items-center">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">百</span>
              </div>
              <div>
                <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>移动创作管理平台</div>
                <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-400'}`}>随时随地管理自己的账号</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-20 h-20 rounded-lg flex items-center justify-center border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                <div className="text-center">
                  <div className="text-2xl">📱</div>
                  <div className={`text-[8px] ${isDark ? 'text-gray-300' : 'text-gray-400'}`}>扫码下载</div>
                </div>
              </div>
              <span className={`text-xs mt-1 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>扫码下载APP</span>
            </div>
          </div>
          
          <div className={`border-t pt-6 ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
            <div className={`flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs mb-4 ${isDark ? 'text-gray-300' : 'text-gray-400'}`}>
              <span>百家号</span>
              <span>百家榜</span>
              <span>联系我们</span>
              <span>服务协议</span>
              <span>隐私政策</span>
              <span>版权投诉</span>
            </div>
            <div className={`text-center text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
              ©2015-2025 百度在线网络技术（北京）有限公司 权利所有
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-100 shadow-lg'} ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="返回顶部"
      >
        ↑
      </button>
    </div>
  );
}
