# Matthieu Renaut Portfolio

A modern, responsive portfolio website for Matthieu Renaut, a Front-end Developer, built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all screen sizes
- **Theme Switcher**: Light and dark mode support
- **Background Switcher**: Multiple background options
- **Project Showcase**: Grid layout with filtering
- **Skills Display**: Visual representation of skills
- **Weather Integration**: Real-time weather information for Paris
- **Music Integration**: Latest played track from Last.fm
- **Contact Section**: Easy way to get in touch

## Tech Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS 3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **API Integration**: Pirate Weather API, Last.fm API

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/matthieurenaut-portfolio.git
   cd matthieurenaut-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Deployment

### Vercel

1. Sign up for a Vercel account at [vercel.com](https://vercel.com)
2. Import your project from GitHub
3. Vercel will automatically detect the Vite project and configure the build settings
4. Click "Deploy"

### Cloudflare Pages

1. Sign up for a Cloudflare account at [cloudflare.com](https://cloudflare.com)
2. Navigate to Cloudflare Pages
3. Connect your GitHub repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Deploy"

### 腾讯 EdgeOne

1. Sign up for a Tencent Cloud account
2. Navigate to EdgeOne
3. Create a new site
4. Configure the origin server to point to your deployed site or upload the `dist` folder directly
5. Set up DNS records if needed

## Project Structure

```
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── Header.jsx   # Header component with theme switcher
│   │   ├── Hero.jsx     # Hero section with personal intro
│   │   ├── Skills.jsx   # Skills display
│   │   ├── Projects.jsx # Project showcase
│   │   ├── Footer.jsx   # Footer with contact info
│   │   ├── Weather.jsx  # Weather widget
│   │   └── Music.jsx    # Last.fm widget
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project configuration
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## API Keys

The project uses the following API keys:

- **Pirate Weather API**: For weather information
- **Last.fm API**: For recent track information

Note: In a production environment, these API keys should be stored in environment variables. Currently, they are hardcoded for demonstration purposes.

## Performance Optimization

- **Code Splitting**: Vite's automatic code splitting
- **Image Optimization**: Responsive image loading
- **CSS Optimization**: Tailwind's purge feature
- **Lazy Loading**: Components and images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
