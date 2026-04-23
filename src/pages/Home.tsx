import { useTheme } from '../hooks/useTheme';

export default function Home() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <section className={`relative min-h-screen overflow-hidden flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-blue-50 to-gray-300'}`}>
        {/* Logo and Theme Toggle */}
        <div className="absolute top-6 left-6 z-10 flex items-center justify-between w-full px-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M600 0C931.371 0 1200 268.629 1200 600C1200 931.371 931.371 1200 600 1200C268.629 1200 0 931.371 0 600C0 268.629 268.629 0 600 0ZM311 918.33H473.11L596.83 600.17L473.11 282H311V918.33ZM727.22 918.33H889.22V727.36L603.44 600.17L727.22 918.33ZM603.44 600.17L889.67 470.94V282H727.33L603.44 600.17Z" fill={isDark ? 'white' : 'black'}/>
              </svg>
            </div>
            <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>酷设计</span>
          </div>
          <button 
            onClick={toggleTheme} 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors mr-4 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            aria-label={isDark ? "切换到白天模式" : "切换到夜晚模式"}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
        
        {/* Background decorative elements */}
        <div className={`absolute inset-0 overflow-hidden h-full ${isDark ? 'bg-[rgb(17_24_39)]' : ''}`}>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/30 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-bl from-pink-400/25 to-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-400/25 to-teal-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center" style={{ transform: 'translateY(-100px)' }}>
          {/* Main title */}
          <div className="text-center mb-28">
            <h1 className={`text-7xl font-bold mb-4 tracking-wider`} style={{ color: isDark ? 'white' : '#2d2d2d', fontFamily: '卓特自由体' }}>
              每天都有新发现
            </h1>
            <p className={`text-sm ${isDark ? 'text-white/90' : 'text-[#2d2d2d]/90'}`}>
              百家号全面升级，实现内容、粉丝、认证、权益的多平台打通
            </p>
          </div>
          
          {/* Platform icons */}
          <div className="w-full flex justify-center px-12">
            <div className={`max-w-4xl w-full flex items-center rounded-full px-12 py-4 ${isDark ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow-lg'}`}>
              <div className="flex overflow-hidden">
                <div className="flex gap-6 animate-scroll">
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-slow">
          <div className={`flex flex-col items-center ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
            <span className="text-xs mb-1">向下滚动</span>
            <div className={`w-6 h-8 border ${isDark ? 'border-white/60' : 'border-gray-400'} rounded-full flex justify-center pt-1.5`}>
              <div className={`w-1 h-2 ${isDark ? 'bg-white/80' : 'bg-gray-600'} rounded-full animate-scroll-down`}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Creator Plans Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>主要推荐的产品</h2>
            <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>好奇领航计划、金芒计划、百家榜、匠心计划、优选计划</p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {/* Card 1 */}
              <div className={`group rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 shadow-lg hover:shadow-xl' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)]'}`}>
                {/* URL bar */}
                <div className="flex items-center justify-between mb-6 relative">
                  <div className="flex items-center">
                    <div className={`flex items-center ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-full px-4 py-2 mr-4`}>
                      <span className="mr-2">🔒</span>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>https://logo.kusheji.com</span>
                    </div>
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>矢量logo下载</span>
                  </div>
                  <a href="https://logo.kusheji.com" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600' : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'}">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>↗</span>
                  </a>
                </div>
                
                {/* Browser window */}
                <div className="rounded-xl overflow-hidden shadow-md">
                  {/* Browser header */}
                  <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'} px-4 py-2 border-b ${isDark ? 'border-gray-600' : 'border-gray-300'} flex items-center`}>
                    <div className="flex space-x-1.5 mr-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                  
                  {/* Browser content */}
                  <div className="relative h-72 bg-gradient-to-br from-blue-900 to-indigo-900">
                    {/* Main text */}
                    <div className="absolute top-1/3 left-8 max-w-md">
                      <h3 className="text-2xl font-bold text-white mb-2">专业的矢量</h3>
                      <p className="text-xl text-white/90">logo下载平台</p>
                    </div>
                    
                    {/* Images */}
                    <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex space-x-2">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform rotate-6">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=logo%20design%2C%20modern%20vector%20graphic%2C%20professional%20design&image_size=square" alt="Logo design" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform -rotate-3">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vector%20illustration%2C%20abstract%20design%2C%20brand%20identity&image_size=square" alt="Vector design" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform rotate-12">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20logo%2C%20clean%20design%2C%20corporate%20branding&image_size=square" alt="Minimalist logo" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className={`group rounded-2xl p-6 transition-all duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 shadow-lg hover:shadow-xl' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)]'}`}>
                {/* URL bar */}
                <div className="flex items-center justify-between mb-6 relative">
                  <div className="flex items-center">
                    <div className={`flex items-center ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-full px-4 py-2 mr-4`}>
                      <span className="mr-2">🔒</span>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>https://ziti.kusheji.com</span>
                    </div>
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>小酷字体</span>
                  </div>
                  <a href="https://ziti.kusheji.com" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600' : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'}">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>↗</span>
                  </a>
                </div>
                
                {/* Browser window */}
                <div className="rounded-xl overflow-hidden shadow-md">
                  {/* Browser header */}
                  <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'} px-4 py-2 border-b ${isDark ? 'border-gray-600' : 'border-gray-300'} flex items-center`}>
                    <div className="flex space-x-1.5 mr-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                  
                  {/* Browser content */}
                  <div className="relative h-72 bg-gradient-to-br from-purple-900 to-pink-800">
                    {/* Main text */}
                    <div className="absolute top-1/3 left-8 max-w-md">
                      <h3 className="text-2xl font-bold text-white mb-2">精选字体，</h3>
                      <p className="text-xl text-white/90">为设计增添魅力。</p>
                    </div>
                    
                    {/* Images */}
                    <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex space-x-2">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform rotate-6">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=font%20design%2C%20modern%20typography%2C%20professional%20fonts&image_size=square" alt="Font design" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform -rotate-3">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=typography%20poster%2C%20creative%20font%20arrangement&image_size=square" alt="Typography design" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 transform rotate-12">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20font%20design%2C%20elegant%20characters&image_size=square" alt="Chinese font" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <button className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-800/80 backdrop-blur-lg border border-gray-700/50' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow'}`}>
              &lt;
            </button>
            <button className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-800/80 backdrop-blur-lg border border-gray-700/50' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow'}`}>
              &gt;
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className={`py-24 relative ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Background decorative elements */}
        <div className={`absolute inset-0 overflow-hidden ${isDark ? 'bg-[rgb(17_24_39)]' : ''}`}>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/30 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-bl from-pink-400/25 to-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-400/25 to-teal-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>赋能优质内容 提供创作新动力</h2>
            <div className="flex justify-center gap-3 flex-wrap">
              {['创作大脑', '百家号大学', '导师计划', '飞跃计划', '慧眼计划', '爆款创造者'].map((tab, i) => (
                <button key={i} className={`px-5 py-2 rounded-full text-sm ${i === 0 ? (isDark ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white') : (isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100')}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr_1fr_1fr] gap-8 max-w-6xl w-full px-4">
            {[
              { title: '爆款创造者' },
              { title: '创作大脑' },
              { title: '百家号大学' },
              { title: '导师计划' },
              { title: '飞跃计划' },
            ].map((feature, i) => (
              <div key={i} className={`${i === 2 ? 'h-64 lg:h-72' : 'h-52'} ${isDark ? 'bg-gray-800/80 backdrop-blur-lg border border-gray-700' : 'bg-white/30 backdrop-blur-lg border border-white/50 shadow-lg'} rounded-2xl flex items-center justify-center text-2xl font-bold relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full"></div>
                  <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full"></div>
                </div>
                <div className="relative text-center">
                  <div className="text-5xl mb-3">🚀</div>
                  <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>{feature.title}</span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Monetization Section */}
      <section className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
            
            <div className="flex flex-wrap justify-center gap-8 px-16">
              {[
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
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-base font-medium">
              加入百家号
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`py-10 border-t ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="container mx-auto px-4">
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
    </div>
  );
}
