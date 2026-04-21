import React, { useState, useEffect, useRef } from 'react';

const Projects = ({ theme, background }) => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      name: '时空图片',
      url: 'https://spacetimepictures.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbanil-spacetimepictures.jpg',
      category: 'web',
      year: '2023'
    },
    {
      id: 2,
      name: '交响绘',
      url: 'https://apaintedsymphony.expedition33.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbanil-expedition33.jpg',
      category: 'web',
      year: '2022'
    },
    {
      id: 3,
      name: 'Synthesio',
      url: 'https://synthesio.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/synthesio.jpg',
      category: 'web',
      year: '2021'
    },
    {
      id: 4,
      name: '埃莱奥诺·邦网',
      url: 'https://eleonorebonnet.fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/eleonorebonnet.jpg',
      category: 'web',
      year: '2021'
    },
    {
      id: 5,
      name: 'Gète咨询公司',
      url: 'https://gete.net',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-gete-consulting.jpg',
      category: 'web',
      year: '2020'
    },
    {
      id: 6,
      name: 'PCA流',
      url: 'https://pca-stream.com/fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-pca-stream.jpg',
      category: 'web',
      year: '2020'
    },
    {
      id: 7,
      name: '韦罗尼卡·哈伯网',
      url: 'https://veroniquehalbrey.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-veroniquehalbrey.jpg',
      category: 'web',
      year: '2019'
    },
    {
      id: 8,
      name: 'Quartus集团',
      url: 'https://groupe-quartus.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-groupequartus.jpg',
      category: 'web',
      year: '2019'
    },
    {
      id: 9,
      name: 'Bea不动产',
      url: 'https://bea-immobilier.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-beaimmobilier.jpg',
      category: 'web',
      year: '2018'
    },
    {
      id: 10,
      name: 'Spinoff',
      url: 'https://spinoff.spintank.fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-spinoff.jpg',
      category: 'web',
      year: '2018'
    },
    {
      id: 11,
      name: 'Le Drumbook',
      url: 'https://ledrumbook.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-ledrumbook.jpg',
      category: 'web',
      year: '2017'
    },
    {
      id: 12,
      name: '风险代理人',
      url: 'https://agent-tous-risques.anses.fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-agenttousrisques.jpg',
      category: 'web',
      year: '2017'
    },
    {
      id: 13,
      name: '重新设计收费站',
      url: 'https://peagereinvente.aprr.fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-peagereinvente.jpg',
      category: 'web',
      year: '2016'
    },
    {
      id: 14,
      name: '巴黎萨克雷公共发展局',
      url: 'https://epa-paris-saclay.fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-epaparissaclay.jpg',
      category: 'web',
      year: '2016'
    },
    {
      id: 15,
      name: '二十三，手牌！',
      url: 'https://2023.spintank.fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-23spintank.jpg',
      category: 'web',
      year: '2015'
    },
    {
      id: 16,
      name: '巴黎律师公会',
      url: 'https://laconference.net',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-laconference.jpg',
      category: 'web',
      year: '2015'
    },
    {
      id: 17,
      name: 'Share-d',
      url: 'https://share-d.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-shared.jpg',
      category: 'web',
      year: '2014'
    },
    {
      id: 18,
      name: '思考的动物',
      url: 'https://animalpensant.com',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-animalpensant.jpg',
      category: 'web',
      year: '2014'
    },
    {
      id: 19,
      name: 'Cheuvreux',
      url: 'https://cheuvreux.fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-cheuvreux.jpg',
      category: 'web',
      year: '2013'
    },
    {
      id: 20,
      name: '农业信贷银行招聘',
      url: 'https://groupecreditagricole.jobs',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-groupecreditagricole.jpg',
      category: 'web',
      year: '2013'
    },
    {
      id: 21,
      name: 'ABC套利',
      url: 'https://abc-arbitrage.com/fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-abc-arbitrage.jpg',
      category: 'web',
      year: '2012'
    },
    {
      id: 22,
      name: '麦当劳招聘',
      url: 'https://carrieres.mcdonalds.fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-mcdonalds.jpg',
      category: 'web',
      year: '2012'
    },
    {
      id: 23,
      name: 'Resonance',
      url: 'https://resonance.golf/fr',
      image: 'https://matthieurenaut.com/wp-content/uploads/thumbnail-resonance.jpg',
      category: 'web',
      year: '2011'
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  const projectsRef = useRef(null);

  // 滚动监听，实现渐入效果
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      projectCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, [filteredProjects]);

  return (
    <section className={`pb-24 px-4 ${background && background.image ? 'liquid-glass-strong' : (theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass-light')}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6" style={{ marginTop: '50px' }}>
          <div className={`inline-flex rounded-full p-1 space-x-1 liquid-glass ${theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
            <button
              type="button"
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all transition-colors ${filter === 'all' ? 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
              onClick={() => setFilter('all')}
            >
              所有项目
            </button>
            <button
              type="button"
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all transition-colors ${filter === 'web' ? 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
              onClick={() => setFilter('web')}
            >
              网页项目
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <a 
                key={project.id} 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`project-card scroll-fade-in group rounded-xl overflow-hidden shadow-lg p-4 ${background && background.image ? 'liquid-glass-strong' : (theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass-light')}`}
              >
                {/* 顶部信息 */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className={`text-xs font-mono text-gray-600 dark:text-gray-300 flex items-center py-2 px-3 rounded-full inline-block liquid-glass ${theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass-light'} sm:order-1 order-2`}>
                    <span className="mr-2 text-gray-400 dark:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-400 dark:text-gray-500">https://</span>
                    <span className="text-gray-600 dark:text-gray-300">{project.url.replace('https://', '').replace('http://', '').replace('www.', '')}</span>
                  </div>
                  <h3 className={`text-base font-medium mb-2 sm:mb-0 sm:ml-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} sm:order-2 order-1`}>
                    {project.name}
                  </h3>
                </div>
                {/* 苹果浏览器样式 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                  {/* 浏览器导航栏 */}
                  <div className="bg-gray-100 dark:bg-[#374151] px-4 py-2 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  {/* 网站截图 */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>
                </div>
              </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;