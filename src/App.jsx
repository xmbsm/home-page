import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Weather from './components/Weather';

function App() {
  // 从localStorage读取保存的状态
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  
  const [background, setBackground] = useState(() => {
    const savedBackground = localStorage.getItem('background');
    return savedBackground ? JSON.parse(savedBackground) : null;
  });

  // 切换主题
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // 应用主题和背景
  useEffect(() => {
    // 添加过渡类
    document.body.classList.add('transition-all', 'duration-500');
    
    // 切换主题
    if (theme === 'dark') {
      document.body.classList.remove('bg-gray-50', 'text-gray-900');
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
      document.body.classList.add('bg-gray-50', 'text-gray-900');
    }
    
    // 应用背景图片
      if (background && background.image) {
        document.body.style.backgroundImage = `url(${background.image})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'top';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundRepeat = 'no-repeat';
        // 当有背景图片时，设置body背景色为透明
        document.body.style.backgroundColor = 'transparent';
      } else {
        document.body.style.backgroundImage = 'none';
        // 当没有背景图片时，恢复默认背景色
        if (theme === 'dark') {
          document.body.style.backgroundColor = '#111827'; // bg-gray-900
        } else {
          document.body.style.backgroundColor = '#f9fafb'; // bg-gray-50
        }
      }
  }, [theme, background]);

  // 当背景变化时保存到localStorage
  useEffect(() => {
    localStorage.setItem('background', JSON.stringify(background));
  }, [background]);

  return (
    <div className={`min-h-screen theme-transition ${background && background.image ? 'bg-transparent' : (theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900')}`}>
      <Header theme={theme} toggleTheme={toggleTheme} setBackground={setBackground} />
      <main>
        <Hero theme={theme} background={background} />
        <Projects theme={theme} background={background} />
      </main>
      <Weather theme={theme} />
      {/* 底部信息条 */}
      <div className={`relative py-2 px-4 text-xs text-center text-gray-500 dark:text-gray-400 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <span>© 2024 Matthieu Renaut · </span>
        <span className="font-mono">Développé avec React</span>
      </div>
    </div>
  );
}

export default App;