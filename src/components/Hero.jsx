import React, { useRef, useEffect, useState } from 'react';
import lottie from 'lottie-web';

const Hero = ({ theme, background }) => {
  const lottieRef = useRef(null);
  const animationRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      try {
        // 如果已有动画，先销毁
        if (animationRef.current) {
          animationRef.current.destroy();
        }

        // 根据主题选择 lottie 文件
        const lottiePath = theme === 'light' ? '/pen-tool/animations/data-black.json' : '/pen-tool/animations/data.json';

        const animation = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: false, // 不循环播放
          autoplay: false,
          path: lottiePath
        });

        animationRef.current = animation;

        animation.addEventListener('data_ready', () => {
          setIsLoading(false);
          console.log('Lottie animation loaded successfully for theme:', theme);
        });

        animation.addEventListener('DOMLoaded', () => {
          console.log('Lottie animation DOM loaded');
        });

        // 监听动画完成事件
        animation.addEventListener('complete', () => {
          console.log('Lottie animation completed');
          // 动画完成后停止在最后一帧
          animation.stop();
        });

        return () => {
          animation.destroy();
        };
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        console.error('Error loading lottie animation:', err);
      }
    }
  }, [theme]); // 当主题变化时重新加载动画

  // 处理鼠标悬停事件
  const handleMouseEnter = () => {
    if (animationRef.current) {
      // 重置动画到第一帧，然后播放
      animationRef.current.goToAndPlay(0);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // 鼠标离开时不停止动画，让它播放完成
  };

  return (
    <section className="pt-40 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* 品牌设计区域 - 整体添加 Liquid Glass 背景，进一步缩小左右间距 */}
        <div className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 py-6 px-2 md:px-3 rounded-2xl liquid-glass ${theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
          {/* 左侧文字 */}
          <div className="text-center md:text-left">
            <h1 className={`text-5xl md:text-6xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'ZhuoTe, serif' }}>
              每天都有新发现
            </h1>
            <h2 className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              设计学习交流平台
            </h2>
          </div>
          
          {/* 右侧动态图标 - 使用 lottie 动画 */}
          <div 
            className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isLoading && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
            {error && (
              <div className="w-full h-full flex items-center justify-center text-red-500">
                <p>动画加载失败: {error}</p>
              </div>
            )}
            <div 
              ref={lottieRef} 
              className="w-full h-full" 
              style={{ minHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
