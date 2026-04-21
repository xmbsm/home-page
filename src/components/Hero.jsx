import React, { useState } from 'react';

const Hero = ({ theme, background }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: '连贯表达 持续生成：轨道补全',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600&q=80',
      leftImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600&q=80',
      videoThumbnails: [
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1516110833967-8a76063bc974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80'
      ]
    },
    {
      id: 2,
      title: '智能创作 无限可能',
      image: 'https://images.unsplash.com/photo-1677442135366-93d15a166959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600&q=80',
      leftImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600&q=80',
      videoThumbnails: [
        'https://images.unsplash.com/photo-1532939163384-3a763051226c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1568702840614-4b4b1c7a5f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80'
      ]
    },
    {
      id: 3,
      title: '未来科技 引领潮流',
      image: 'https://images.unsplash.com/photo-1638748284574-73c534a893a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600&q=80',
      leftImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600&q=80',
      videoThumbnails: [
        'https://images.unsplash.com/photo-1581091226108-1dd70a314f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1512496015851-5b06dd8458d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
        'https://images.unsplash.com/photo-1584727632623-88d47de81121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80'
      ]
    }
  ];
  
  return (
    <section className="pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 轮播容器 */}
        <div className="relative">
          {/* 轮播内容 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {/* 左侧卡片 - 点击切换到上一张 */}
            <div className="w-1/5 flex-shrink-0 cursor-pointer hidden md:block" onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}>
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={slides[currentSlide].leftImage} 
                  alt="左侧像素风格图片" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            {/* 中间主要内容 */}
            <div className="flex-1 max-w-[60%] md:max-w-[60%] max-w-full">
              <div className="h-[400px] relative rounded-2xl overflow-hidden shadow-lg md:h-[400px] h-[300px]">
                <img 
                  src={slides[currentSlide].image} 
                  alt="轮播图片" 
                  className="w-full h-full object-cover"
                />
                {/* 标题 */}
                <div className="absolute top-6 left-8 text-white font-medium text-xl">
                  {slides[currentSlide].title}
                </div>
                {/* 视频控制栏 */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 rounded-lg p-4 flex items-center space-x-4 md:space-x-4 space-x-2 md:p-4 p-3 w-[90%] md:w-auto">
                  {slides[currentSlide].videoThumbnails.map((thumbnail, index) => (
                    <React.Fragment key={index}>
                      <div className="relative md:w-28 md:h-18 w-20 h-14 rounded overflow-hidden border border-gray-600">
                        <img 
                          src={thumbnail} 
                          alt={`视频${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                        {index === 0 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="md:w-10 md:h-10 w-8 h-8 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="5,3 19,12 5,21"></polygon>
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      {index < slides[currentSlide].videoThumbnails.length - 1 && (
                        <div className="text-gray-400 md:text-lg text-sm">+</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 右侧卡片 - 点击切换到下一张 */}
            <div className="w-1/5 flex-shrink-0 cursor-pointer hidden md:block" onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}>
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                {/* 右侧占位 */}
              </div>
            </div>
          </div>
          
          {/* 轮播指示器 */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;