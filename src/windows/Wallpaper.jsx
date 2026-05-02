import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import React, { useCallback, memo } from 'react'

const wallpapers = [
  { id: 1, name: 'Default Wallpaper', src: '/images/wallpaper-01.jpg' },
  { id: 2, name: 'Anime Wallpaper', src: '/images/gal9.webp' },
  { id: 3, name: 'Metallic Wallpaper', src: '/images/wallpaper.webp' },
  { id: 4, name: 'Big Sur Wallpaper', src: '/images/gal2.webp' },
  { id: 5, name: 'Ventura Wallpaper', src: '/images/gal3.jpg' },
  { id: 6, name: 'Sequia Wallpaper', src: '/images/gal5.webp' },
  { id: 7, name: 'Game Of Thrones', src: '/images/gal4.webp' },
  { id: 8, name: 'Toji', src: '/images/gal1.webp' },
  { id: 9, name: 'JJK Theme', src: '/images/gal6.webp' },
  { id: 10, name: 'DeathNote', src: '/images/gal7.webp' },
]

const WallpaperItem = memo(({ wallpaper, onSelect }) => (
  <div
    className='relative cursor-pointer group'
    onClick={() => onSelect(wallpaper.src)}
  >
    <div className='aspect-video rounded-md overflow-hidden'>
      <img
        src={wallpaper.src}
        alt={wallpaper.name}
        loading='lazy'
        decoding='async'
        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
      />
    </div>
    <div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center'>
      {wallpaper.name}
    </div>
  </div>
))

WallpaperItem.displayName = 'WallpaperItem'

const Wallpaper = () => {
  const handleWallpaperSelect = useCallback((src) => {
    localStorage.setItem('wallpaperUrl', src)
    document.documentElement.style.setProperty('--wallpaper-url', `url('${src}')`)
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div id='window-header' className='window-drag-handle'>
        <WindowControls target="wallpaper" />
        <h2 className='flex-1 text-center font-bold'>选择壁纸</h2>
        <div className='w-10'></div>
      </div>
      <div className='bg-white p-6 overflow-y-auto flex-1 min-h-0'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {wallpapers.map((wallpaper) => (
            <WallpaperItem 
              key={wallpaper.id} 
              wallpaper={wallpaper} 
              onSelect={handleWallpaperSelect}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const WallpaperWindow = WindowWrapper(Wallpaper, 'wallpaper')

export { Wallpaper }
export default WallpaperWindow
