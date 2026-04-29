import React, { Suspense, lazy, useEffect, useState } from 'react'
import useWindowStore from '#store/window'

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

const NavBar = lazy(() => import('./components/NavBar.jsx'))
const Welcome = lazy(() => import('./components/Welcome.jsx'))
const Dock = lazy(() => import('./components/Dock.jsx'))
const Home = lazy(() => import('./components/Home.jsx'))
const ControlPanel = lazy(() => import('./components/ControlPanel.jsx'))
const MobileWindow = lazy(() => import('./components/MobileWindow.jsx'))


const Finder = lazy(() => import('./windows/Finder.jsx'))
const Resume = lazy(() => import('./windows/Resume.jsx'))
const Safari = lazy(() => import('./windows/Safari.jsx'))
const Terminal = lazy(() => import('./windows/Terminal.jsx'))
const Text = lazy(() => import('./windows/Text.jsx'))
const Image = lazy(() => import('./windows/Image.jsx'))
const Contact = lazy(() => import('./windows/Contact.jsx'))
const Photos = lazy(() => import('./windows/Photos.jsx'))
const Music = lazy(() => import('./windows/Music.jsx'))
const Game = lazy(() => import('./windows/Game.jsx'))
const Trash = lazy(() => import('./windows/Trash.jsx'))
const VSCode = lazy(() => import('./windows/VSCode.jsx'))
const Wallpaper = lazy(() => import('./windows/Wallpaper.jsx'))

const Analytics = !isMobile ? lazy(() => import('@vercel/analytics/react').then(m => ({ default: m.Analytics }))) : null;
const SpeedInsights = !isMobile ? lazy(() => import('@vercel/speed-insights/react').then(m => ({ default: m.SpeedInsights }))) : null;

if (!isMobile) {
  import('gsap').then(({ gsap }) => {
    import('gsap/Draggable').then(({ Draggable }) => {
      gsap.registerPlugin(Draggable);
    });
  });
}

const windowTitles = {
  terminal: '终端',
  safari: '浏览器',
  resume: '简历',
  imgfile: '图片查看器',
  txtfile: '文本编辑器',
  finder: '访达',
  contact: '联系方式',
  photos: '相册',
  music: '音乐',
  game: '游戏',
  vscode: '代码编辑器',
  trash: '废纸篓',
  wallpaper: '壁纸设置'
};

const App = () => {
  const { windows } = useWindowStore();
  
  useEffect(() => {
    const saved = localStorage.getItem('wallpaperUrl');
    if (saved && !isMobile) {
      document.documentElement.style.setProperty(
        '--wallpaper-url', `url('${saved}')`
      );
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const preloadModules = () => {
      import('./windows/Finder.jsx');
      import('./windows/Resume.jsx');
      import('./windows/Safari.jsx');
      import('./windows/Terminal.jsx');
      import('./windows/Text.jsx');
      import('./windows/Image.jsx');
      import('./windows/Contact.jsx');
      import('./windows/Photos.jsx');
      import('./windows/Music.jsx');
      import('./windows/Game.jsx');
      import('./windows/Trash.jsx');
      import('./windows/VSCode.jsx');
    };
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      requestIdleCallback(preloadModules);
    } else {
      setTimeout(preloadModules, 100);
    }
  }, []);
  
  return (
    <>
      <main>
        <Suspense fallback={<div />}>
          <NavBar />
          <ControlPanel />
          <Welcome />
          <Dock />
        </Suspense>
        
        {!isMobile ? (
          <>
            {windows['terminal']?.isOpen && <Suspense fallback={null}><Terminal /></Suspense>}
            {windows['safari']?.isOpen && <Suspense fallback={null}><Safari /></Suspense>}
            {windows['resume']?.isOpen && <Suspense fallback={null}><Resume /></Suspense>}
            {windows['imgfile']?.isOpen && <Suspense fallback={null}><Image /></Suspense>}
            {windows['txtfile']?.isOpen && <Suspense fallback={null}><Text /></Suspense>}
            {windows['finder']?.isOpen && <Suspense fallback={null}><Finder /></Suspense>}
            {windows['contact']?.isOpen && <Suspense fallback={null}><Contact /></Suspense>}
            {windows['photos']?.isOpen && <Suspense fallback={null}><Photos /></Suspense>}
            {windows['music']?.isOpen && <Suspense fallback={null}><Music /></Suspense>}
            {windows['game']?.isOpen && <Suspense fallback={null}><Game /></Suspense>}
            {windows['vscode']?.isOpen && <Suspense fallback={null}><VSCode /></Suspense>}
            {windows['trash']?.isOpen && <Suspense fallback={null}><Trash /></Suspense>}
            {windows['wallpaper']?.isOpen && <Suspense fallback={null}><Wallpaper /></Suspense>}
          </>
        ) : (
          <>
            {windows['terminal']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="terminal" title={windowTitles.terminal}>
                  <Terminal />
                </MobileWindow>
              </Suspense>
            )}
            {windows['safari']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="safari" title={windowTitles.safari}>
                  <Safari />
                </MobileWindow>
              </Suspense>
            )}
            {windows['resume']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="resume" title={windowTitles.resume}>
                  <Resume />
                </MobileWindow>
              </Suspense>
            )}
            {windows['finder']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="finder" title={windowTitles.finder}>
                  <Finder />
                </MobileWindow>
              </Suspense>
            )}
            {windows['contact']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="contact" title={windowTitles.contact}>
                  <Contact />
                </MobileWindow>
              </Suspense>
            )}
            {windows['photos']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="photos" title={windowTitles.photos}>
                  <Photos />
                </MobileWindow>
              </Suspense>
            )}
            {windows['music']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="music" title={windowTitles.music}>
                  <Music />
                </MobileWindow>
              </Suspense>
            )}
            {windows['game']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="game" title={windowTitles.game}>
                  <Game />
                </MobileWindow>
              </Suspense>
            )}
            {windows['vscode']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="vscode" title={windowTitles.vscode}>
                  <VSCode />
                </MobileWindow>
              </Suspense>
            )}
            {windows['wallpaper']?.isOpen && (
              <Suspense fallback={null}>
                <MobileWindow windowId="wallpaper" title={windowTitles.wallpaper}>
                  <Wallpaper />
                </MobileWindow>
              </Suspense>
            )}
          </>
        )}
        
        {!isMobile && <Suspense fallback={null}><Home /></Suspense>}
      </main>
      
      {!isMobile && Analytics && SpeedInsights && (
        <Suspense fallback={null}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      )}
    </>
  )
}

export default App
