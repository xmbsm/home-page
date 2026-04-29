import React, { useEffect } from 'react';
import useWindowStore from '#store/window';

const MobileWindow = React.memo(({ children, windowId, title }) => {
  const closeWindow = useWindowStore(state => state.closeWindow);
  const windows = useWindowStore(state => state.windows);
  
  const isOpen = windows[windowId]?.isOpen;

  useEffect(() => {
    const handleBackButton = (e) => {
      if (isOpen) {
        e.preventDefault();
        closeWindow(windowId);
      }
    };

    window.addEventListener('popstate', handleBackButton);
    return () => window.removeEventListener('popstate', handleBackButton);
  }, [isOpen, closeWindow, windowId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm"
      onClick={() => closeWindow(windowId)}
    >
      <div 
        className="w-full h-full bg-white rounded-t-3xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-sm text-gray-500 font-medium">{title}</span>
          </div>
          <button
            onClick={() => closeWindow(windowId)}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close window"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
});

MobileWindow.displayName = 'MobileWindow';

export default MobileWindow;