import React, { useState, useEffect } from 'react';

const Music = ({ theme }) => {
  const [recentTrack, setRecentTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentTrack = async () => {
      try {
        // 注意：在实际生产环境中，应该使用环境变量存储API密钥
        const apiKey = 'a5fe27b34ee25a8000e33513d2f2796e';
        const username = 'monsieur_m';
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données musicales');
        }

        const data = await response.json();
        if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length > 0) {
          setRecentTrack(data.recenttracks.track[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentTrack();
  }, []);

  if (loading) {
    return null; // 不显示加载状态，避免页面闪烁
  }

  if (error || !recentTrack) {
    return null; // 出错时不显示音乐组件
  }

  return (
    <div className={`fixed bottom-12 left-4 p-2 rounded-full z-40 liquid-glass ${theme === 'dark' ? 'liquid-glass-dark' : 'liquid-glass-light'}`}>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded overflow-hidden">
          {recentTrack.image && recentTrack.image.length > 0 ? (
            <img 
              src={recentTrack.image[1]['#text']} 
              alt={recentTrack.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            </div>
          )}
        </div>
        <div className="hidden sm:block">
          <p className="text-xs font-medium truncate">{recentTrack.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Music;