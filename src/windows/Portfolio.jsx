import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const projects = [
  {
    title: "小酷素材",
    desc: "专注海外商业设计精品素材，每日稳定更新10+款",
    img: "/images/echonet-cover.webp",
    tags: ["设计素材", "海外素材", "样机模板", "矢量插画", "笔刷", "图形图标", "平面图形", "网页模板"],
    liveUrl: "https://sucai.kusheji.com/",
    codeUrl: "#",
  },
  {
    title: "Dev Mux",
    desc: "A collaboration platform featuring video calls, code editing, and a whiteboard with real-time sync via LiveKit and CodeSandbox.",
    img: "/images/devmux-cover.webp",
    tags: ["Docker", "Canvas", "Prisma", "PostgreSQL", "Node.js", "LiveKit", "Websockets", "WebRTC"],
    liveUrl: "https://devmux.com",
    codeUrl: "#",
  },
  {
    title: "ShopKar",
    desc: "An AI-powered shopping assistant that helps users find the best products through natural conversation.",
    img: "/images/shopkar-cover.webp",
    tags: ["React", "Node.js", "AI", "E-commerce", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Tidy Tasks",
    desc: "A smart task management app with AI-powered prioritization and natural language input.",
    img: "/images/tidytasks-cover.webp",
    tags: ["Next.js", "TypeScript", "AI", "Prisma"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "VS Code Web IDE",
    desc: "A full-featured web-based IDE with cloud sync, extensions, and real-time collaboration.",
    img: "/images/vscode-cover.webp",
    tags: ["TypeScript", "WebAssembly", "WebSocket", "Monaco Editor"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "PentaGo Online",
    desc: "A multiplayer board game platform with real-time gameplay and tournament features.",
    img: "/images/pentago-cover.webp",
    tags: ["React", "Socket.io", "Game Design", "WebRTC"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Cyberpunk",
    desc: "A cybersecurity training platform with gamified learning and real-world simulations.",
    img: "/images/cyberpunk-cover.webp",
    tags: ["React", "Cybersecurity", "Gamification"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

const ProjectCard = ({ project }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="project-card" style={{
      display: 'flex',
      background: '#fff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      border: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{
        position: 'relative',
        width: '48%',
        minHeight: '280px',
        background: '#1a1a2e',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {!imgError ? (
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={() => setImgError(true)}
          />
        ) : null}
        {imgError && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
            color: 'white',
            gap: '12px',
          }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
              <polygon points="5 3 19 12 5 21 5 3" fill="rgba(255,255,255,0.2)" stroke="white" />
            </svg>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px' }}>{project.title}</span>
          </div>
        )}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '2px solid rgba(255,255,255,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      <div style={{
        flex: 1,
        padding: '28px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: '0 0 12px',
            color: '#1a1a2e',
            lineHeight: 1.3,
          }}>
            {project.title}
          </h3>
          <p style={{
            fontSize: '0.95rem',
            color: '#6b7280',
            lineHeight: 1.7,
            margin: '0 0 20px',
          }}>
            {project.desc}
          </p>
          <div className="project-card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                padding: '4px 14px',
                borderRadius: '20px',
                background: '#eef2ff',
                color: '#4338ca',
                fontSize: '0.78rem',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '8px', padding: '12px 20px', borderRadius: '12px', background: '#1a1a2e',
            color: '#fff', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none',
            cursor: 'pointer', border: 'none', transition: 'background 0.2s ease',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            立即前往
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <div id="window-header" className="window-drag-handle">
        <WindowControls target="portfolio" />
        <h2 className="font-bold flex-1 text-center">项目</h2>
      </div>
      <div style={{
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '32px 36px',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #fce4ec 40%, #e0f7fa 100%)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 14px', color: '#1a1a2e' }}>
            精选项目
          </h1>
          <p style={{
            fontSize: '1.05rem', color: '#6b7280', margin: 0, maxWidth: '640px',
            marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7,
          }}>
            展示我最近的工作成果，包括全栈应用、Web 开发项目和创新解决方案。
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

const PortfolioWindow = WindowWrapper(Portfolio, "portfolio");

export { Portfolio };
export default PortfolioWindow;
