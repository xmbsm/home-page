import { create } from 'zustand';

const useSettingsStore = create((set) => ({
  brightness: 100,
  volume: 50,
  isFullscreen: false,
  isMusicPlaying: false,
  currentTrack: null,
  
  setBrightness: (brightness) => set({ brightness: Math.max(0, Math.min(100, brightness)) }),
  
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(100, volume)) }),
  
  toggleFullscreen: () => set((state) => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      return { isFullscreen: true };
    } else {
      document.exitFullscreen();
      return { isFullscreen: false };
    }
  }),
  
  setMusicPlaying: (playing) => set({ isMusicPlaying: playing }),
  
  setCurrentTrack: (track) => set({ currentTrack: track }),
  
  toggleMusic: () => set((state) => ({ isMusicPlaying: !state.isMusicPlaying })),
}));

export default useSettingsStore;