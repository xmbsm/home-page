import React, { useState, useEffect, useRef } from 'react';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

const Clock = React.memo(() => {
  const [time, setTime] = useState(() => getTimeString());
  const dateTimeRef = useRef(null);
  const dateTimePlaceholderRef = useRef(null);

  function getTimeString() {
    const now = new Date();
    const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const period = hours < 6 ? '凌晨' : hours < 12 ? '上午' : hours < 18 ? '下午' : '晚上';
    const hour12 = hours % 12 || 12;
    return `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${days[now.getDay()]} ${period}${hour12}:${minutes}`;
  }

  useEffect(() => {
    // Update time every 60 seconds
    const intervalId = setInterval(() => {
      setTime(getTimeString());
    }, 60000); // 60 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Skip drag functionality on mobile
    if (isMobile) return;

    // Dynamically import GSAP only on desktop
    Promise.all([
      import('gsap'),
      import('gsap/Draggable')
    ]).then(([{ gsap }, { Draggable }]) => {
      const dateTime = dateTimeRef.current;
      const dateTimePlaceholder = dateTimePlaceholderRef.current;

      if (!dateTime || !dateTimePlaceholder) return;

      // Hide placeholder initially
      gsap.set(dateTimePlaceholder, { opacity: 0 });

      const snapThreshold = 500;

      Draggable.create(dateTime, {
        type: "x,y",
        bounds: "body",
        cursor: "grab",
        activeCursor: "grabbing",
        zIndexBoost: false,
        onDragStart: function () {
          gsap.to(dateTimePlaceholder, { opacity: 1, duration: 0.2 });
        },
        onDragEnd: function () {
          const isWithinSnapZone = 
            Math.abs(this.x) < snapThreshold && 
            Math.abs(this.y) < snapThreshold;

          if (isWithinSnapZone) {
            gsap.to(this.target, {
              x: 0,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
          
          gsap.to(dateTimePlaceholder, { opacity: 0, duration: 0.2 });
        }
      });
    });
  }, []);

  return (
    <>
      <time ref={dateTimeRef}>
        {time}
      </time>
      
      {/* Placeholder for date & time */}
      {!isMobile && (
        <div className="datetime-placeholder" ref={dateTimePlaceholderRef}>
        </div>
      )}
    </>
  );
});

Clock.displayName = 'Clock';

export default Clock;
