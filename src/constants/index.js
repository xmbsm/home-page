const navLinks = [
  {
    id: 1,
    name: "项目",
    type: "portfolio",
  },
  {
    id: 3,
    name: "联系",
    type: "contact",
  },
];

const navIcons = [
  /* {
    id: 1,
    img: "/icons/wifi.svg",
  }, */
  {
    id: 2,
    img: "/icons/search.svg",
    type: "safari"
  },
  {
    id: 3,
    img: "/icons/music.svg",
    type: "music",
  },
  {
    id: 4,
    img: "/icons/user.svg",
    type: "finder",
    action: "about",
  },

  {
    id: 6,
    img: "/icons/wallpaper.svg",
    type: "wallpaper",
  },

];

const dockApps = [
  {
    id: "portfolio",
    name: "项目",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "文章", // was "Safari"
    icon: "safari.webp",
    canOpen: true,
  },
  {
    id: "photos",
    name: "相册", // was "Photos"
    icon: "photos.webp",
    canOpen: true,
  },
  {
    id: "contact",
    name: "联系", // or "Get in touch"
    icon: "contact.webp",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "小酷字体",
    icon: "mfzt.svg",
    canOpen: true,
  },
  {
    id: "vscode",
    name: "LOGO下载",
    icon: "logoxz.svg",
    canOpen: true,
  },
  {
    id: "music",
    name: "音乐", // was "Trash"
    icon: "music.webp",
    canOpen: true,
  },
  {
    id: "game",
    name: "游戏",
    icon: "game.webp",
    canOpen: true,
  },
  {
    id: "trash", // unique id to avoid duplicate keys in Dock
    name: "废纸篓",
    icon: "trash.webp",
    canOpen: true,
    action: "trash",
  },
];

const blogPosts = [
  
  {
    id: 2,
    date: "July 5, 2025",
    title: "Mastering Frontend Performance: Speed Up Your Website",
    image: "/images/blog3.png",
    link: "#",
  },
  {
    id: 1,
    date: "June 10, 2025",
    title:"Developing Dynamic Web Experiences Using React",
    image: "/images/blog1.png",
    link: "#",
  },
  {
    id: 3,
    date: "May 20, 2025",
    title: "CSS Animations: Bringing Your Website to Life",
    image: "/images/blog2.png",
    link: "#",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "TypeScript", "HTML5", "Vite"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "GSAP", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python","REST APIs"],
  },
  {
    category: "Database",
    items: ["SQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub","Axios", "Jest", "Figma"],
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/",
  },
  {
    id: 2,
    text: "Youtube",
    icon: "/icons/youtube.svg",
    bg: "#4bcb63",
    link: "https://www.youtube.com/",
  },
  {
    id: 3,
    text: "Discord",
    icon: "/icons/discord.svg",
    bg: "#ff866b",
    link: "https://discord.gg/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "图库",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "回忆",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "地点",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "人物",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "收藏",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal2.webp",
  },
  {
    id: 2,
    img: "/images/gal3.jpg",
  },
  {
    id: 3,
    img: "/images/gal5.webp",
  },
  {
    id: 4,
    img: "/images/gal4.webp",
  },
  {
    id: 5,
    img: "/images/gal1.webp",
  },
  {
    id: 6,
    img: "/images/gal6.webp",
  },
  {
    id: 7,
    img: "/images/wallpaper.webp",
  },
  {
    id: 8,
    img: "/images/gal7.webp",
  },
  {
    id: 9,
    img: "/images/gal8.jpg",
  },
  {
    id: 10,
    img: "/images/gal15.webp",
  },
  {
    id: 11,
    img: "/images/gal10.jpg",
  },
  {    
    id: 12,
    img: "/images/gal11.jpg",
  },
  {
    id: 13,
    img: "/images/gal12.jpg",
  },
  {
    id: 14,
    img: "/images/gal13.webp",
  },
  {
    id: 15,
    img: "/images/gal14.webp",
  },
  {
    id: 16,
    img: "/images/wallpaper-01.jpg",
  },
  {
    id: 17,
    img: "/images/gal9.webp",
  },
  {
    id: 18,
    img: "/images/gal16.webp",
  }
];

const songs = [
  
  {
    id: 1,
    title: "I Really Want to Stay at Your House",
    author: "Rosa Walton (with Hallie Coggins)",
    src: "/audio/lucysong.mp3",
    cover: "/images/lucysong.jpg",
  },
  {
    id: 2,
    title: "City Ruins - Rays of Light",
    author: "NieR: Automata OST",
    src: "/audio/City Ruins - Rays of Light (NieR_Automata Original Soundtrack)Audio.mp3",
    cover: "/images/city.webp",
  },
  {
    id: 3,
    title: "Feel It",
    author: "D4vd",
    src: "/audio/feelit.mp3",
    cover: "/images/feelit.jpg",
  },
  {
    id: 4,
    title: "Ma Meilleure Ennemie",
    author: "Arcane OST",
    src: "/audio/arcane.mp3",
    cover: "/images/arcane.jpg",
  },
  {
    id: 5,
    title: "Fire Again",
    author: "VALORANT",
    src: "/audio/fireagain.mp3",
    cover: "/images/fireagain.jpg",
  },
  {
    id: 6,
    title: "Die For You",
    author: "VALORANT",
    src: "/audio/dieforyou.mp3",
    cover: "/images/dieforyou.jpg",
  },
  {
    id: 7,
    title: "Ticking Away",
    author: "VALORANT",
    src: "/audio/Ticking Away.mp3",
    cover: "/images/tickingAway.jpg",
  },
  {
    id: 8,
    title: "Be a flower",
    author: "Ryokuoushoku Shakai",
    src: "/audio/Be a flower.mp3",
    cover: "/images/maomao.jpg",
  },
  {
    id: 9,
    title: "Anytime Anywhere",
    author: "Milet",
    src: "/audio/Anytime Anywhere.mp3",
    cover: "/images/anytimeanywhere.jpg",
  },
  {
    id: 10,
    title: "MAGIC",
    author: "Ado",
    src: "/audio/ADO_magic.mp3",
    cover: "/images/magic.jpg",
  },
  {
    id: 11,
    title: "Idol",
    author: "YASOBI",
    src: "/audio/YASOBI_oshi_s1.mp3",
    cover: "/images/Oshi_i_s1.jpg",
  },
  {
    id: 12,
    title: "Test Me",
    author: "Chanmina",
    src: "/audio/oshi_s3.mp3",
    cover: "/images/Oshi_i_s3.jpg",
  },
  {
    id: 13,
    title: "Burning",
    author: "Hitsujibungaku",
    src: "/audio/oshi_s2.mp3",
    cover: "/images/Oshi_i_s2.jpg",
  },
  {
    id: 14,
    title: "The Path to Becoming a Hero",
    author: "ZZZ Miyabi's OST",
    src: "/audio/The Path to Becoming a Hero.mp3",
    cover: "/images/miyabi.jpg",
  },
  {
    id: 15,
    title: "Dandelion",
    author: "Go!go!vanillas",
    src: "/audio/Dandelion.mp3",
    cover: "/images/dandelion.jpg",
  },
  {
    id: 16,
    title: "Abunaikioku (feat. Aoi Koga)",
    author: "Masayuki Suzuki",
    src: "/audio/kaguya.mp3",
    cover: "/images/kaguya.jpg",
  },
  {
    id: 17,
    title: "Fukashigi no KARTE",
    author: "Mai Sakurajima (VA: Sami Seto)",
    src: "/audio/Fukashigi no KARTE_Mai Sakurajima_CVAsami Seto.mp3",
    cover: "/images/mai.jpg",
  },
  {
    id: 18,
    title: "Kiminosei",
    author: "The Peggies",
    src: "/audio/kiminosei_the peggies.mp3",
    cover: "/images/kimi.jpg",
  },  
  {
    id: 19,
    title: "RED and BLUE",
    author: "Kaguya Shinomiya (VA: Aoi Koga)",
    src: "/audio/kaguya2.mp3",
    cover: "/images/kaguya2.jpg",
  },
  
  {
    id: 20,
    title: "Voices of The Chord (feat. Greta G)",
    author: "Tom Dabrowski",
    src: "/audio/86.mp3",
    cover: "/images/86.jpg",
  },
  {
    id: 21,
    title: "Odoriko",
    author: "Vaundy",
    src: "/audio/odoriko.mp3",
    cover: "/images/odorika.jpg",
  },
  {
    id: 22,
    title: "Something Super Sweet",
    author: "Rory Webley",
    src: "/audio/something-super-sweet.mp3",
    cover: "/images/sweet.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  songs,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "工作",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [

    // ▶ Project 1 Cyberpunk
    {
      id: 5,
      name: "素材",
      icon: "/images/folder.svg",
      kind: "folder",
      position: "top-14 left-16",
      windowPosition: "top-[80px] left-[120px]",
      children: [
        {
          id: 1,
          name: "海外素材.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-60 right-70 ",
          description: [
            "专注海外商业设计精品素材，每日稳定更新10+款，目前已更新12000+ 精品素材"
          ],
        },
        {
          id: 2,
          name: "点击访问",
          icon: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://sucai.kusheji.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "关注我们.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/cyberpunk.png",
        },
      ],
    },

    // ▶ Project 2 ShopKar
    {
      id: 6,
      name: "字体",
      icon: "/images/folder.svg",
      kind: "folder",
      position: "top-40 left-16",
      windowPosition: "top-[220px] left-[120px]",
      children: [
        {
          id: 1,
          name: "免费字体.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-52 right-80",
          description: [
            "免费可商用中文字体下载网站，无版权免费字体下载！",
            "下载地址：https://qtx.lanzoul.com/b00rn60xde",
            "密码:5rzu"
          ],
        },
        {
          id: 2,
          name: "小酷字体",
          icon: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://ziti.kusheji.com/",
          position: "top-5 left-10",
        },
        {
          id: 4,
          name: "Follow.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-65 right-30",
          imageUrl: "/images/shopkar.png",
        },
      ],
    },

    // ▶ Project 3 Tidy Tasks
    {
      id: 7,
      name: "文件夹",
      icon: "/images/folder.svg",
      kind: "folder",
      position: "top-65 left-15",
      windowPosition: "top-[360px] left-[120px]",
      children: [
        {
          id: 1,
          name: "Folder.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-67 right-85",
          description: [
            "TidyTasks is a clean and efficient task manager built with React and Vite, designed to help users stay organized without any unnecessary clutter.",
            "Instead of a basic to-do list, it offers smooth interactions, instant updates, and a polished UI that makes managing tasks feel effortless.",
            "Think of it like a personal productivity dashboard add tasks, edit them, categorize them, and track progress with zero friction.",
            "Built with React Hooks, Tailwind CSS, and local storage, it delivers fast performance, smooth animations, and persistent data across sessions on any device.",
          ],
        },
        {
          id: 2,
          name: "kusheji.com",
          icon: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://kusheji.com/",
          position: "top-25 left-30",
        },
        {
          id: 4,
          name: "Folder.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/tidytask.png",
        },
        {
          id: 5,
          name: "xmbsm.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/",
          position: "top-10 right-20",
        },
      ],
    },

    // ▶ Project 5 VS Code Web IDE
    {
      id: 10,
      name: "书签",
      icon: "/images/folder.svg",
      kind: "folder",
      position: "top-40 left-45",
      windowPosition: "top-[220px] left-[280px]",
      children: [
        {
          id: 1,
          name: "书签.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-60 right-70",
          description: [
            "个人书签随缘更新"
          ],
        },
        {
          id: 2,
          name: "酷设计",
          icon: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://kusheji.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Bookmarks.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/vscode.png",
        },
      ],
    },

    // PentaGo Online
    {
      id: 11,
      name: "知识库",
      icon: "/images/folder.svg",
      kind: "folder",
      position: "top-15 left-45",
      windowPosition: "top-[80px] left-[280px]",
      children: [
        {
          id: 1,
          name: "知识库.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-67 right-85",
          image: "/images/pentagoonline.png",
          subtitle: "知识库",
          description: [
            "会思考的知识库，开启搜读写新体验"
          ],
        },
        {
          id: 2,
          name: "知识库",
          icon: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://kusheji.com/",
          position: "top-25 left-30",
        },
        {
          id: 4,
          name: "knowledge.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/pentagoonline.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "关于我",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/swastik_2.jpeg",
    },
    {
      id: 2,
      name: "官网",
      icon: "/images/safari.webp",
      kind: "file",
      fileType: "url",
      href: "https://kusheji.com/",
      position: "top-60 left-50",
    },
    {
      id: 3,
      name: "xmbsm.github",
      icon: "/images/plain.png",
      kind: "file",
      fileType: "fig",
      href: "https://github.com/",
      position: "top-60 left-95",
    },
    {
      id: 4,
      name: "AboutMe.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-18 left-50",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/swastik.webp",
      description: [
        "待更新"
      ],
    },
    {
      id: 5,
      name: "qtx.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-95",
      subtitle: "Tech Stack",
      description: [
        "⚙️ Frontend:",
        "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, GSAP",
        "",
        "🧠 State Management:",
        "Redux, Redux Toolkit, Zustand",
        "",
        "🛠️ Tools & Build Systems:",
        "Vite, npm, Git, GitHub, Axios, Jest, Figma",
        "",
        "🎨 UI & Workflow:",
        "Responsive Design, Component Architecture, Animations, Micro-interactions, Performance Optimization, Accessibility Basics",
        "",
        "📡 APIs & Data:",
        "REST APIs, TMDB API, JSON handling, Async data fetching",
        "",
        "📱 Other / Supporting:",
        "Python, SQL, Machine Learning, React Native",
      ],
    },
    {
      id: 6,
      name: "me2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-55 left-5",
      imageUrl: "/images/swastik.webp",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "废纸篓",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 4,
      name: "Trash4.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-65 left-80",
      imageUrl: "/images/trash-4.jpg",
    },
    {
      id: 3,
      name: "Trash3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-55 left-30",
      imageUrl: "/images/trash-3.jpg",
    },
    {
      id: 2,
      name: "Trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-20 left-55",
      imageUrl: "/images/trash-2.jpg",
    },
    {
      id: 5,
      name: "kusheji.com",
      icon: "/images/safari.webp",
      kind: "file",
      fileType: "url",
      href: "https://kusheji.com/",
      position: "top-10 right-10",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  portfolio: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  vscode: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  music: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  game: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  wallpaper: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
