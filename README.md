# Kaarthickeyan D - AI/ML Engineer Portfolio

A modern, responsive portfolio website showcasing AI/ML projects, achievements, and professional experience. Built with React, TypeScript, Tailwind CSS, and Framer Motion animations.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents (Cyan & Violet)
- **Smooth Animations**: Framer Motion scroll reveals and interactions
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Structured data (Schema.org) and meta tags
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Performance**: Built with Vite for fast development and production builds

## 📋 Sections

- **Home**: Hero section with call-to-action
- **About**: Professional background and expertise
- **Internships**: Work experience and professional journey
- **Projects**: AI/ML projects with descriptions and links
- **Skills**: Technical skills and competencies
- **Achievements**: Awards and recognitions
- **Contact**: Contact form and social links

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: React Icons
- **Deployment**: GitHub Pages with GitHub Actions CI/CD

## 📦 Local Development

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kaarthickeyan/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run deploy    # Build production-ready bundle
```

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Automated Deployment
- Push changes to `main` branch → Automatic deployment
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Live URL: `https://kaarthickeyan.github.io/portfolio`

### Manual Deployment (if needed)

```bash
npm run build
npm run preview
```

## 📂 Project Structure

```
portfolio/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions CI/CD pipeline
├── src/
│   ├── components/
│   │   ├── Nav.tsx             # Navigation bar
│   │   ├── Footer.tsx          # Footer section
│   │   ├── SEO.tsx             # SEO meta tags & structured data
│   │   └── ProjectModal.tsx    # Project details modal
│   ├── pages/
│   │   ├── Home.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Internships.tsx     # Work experience
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Skills.tsx          # Skills section
│   │   ├── Achievements.tsx    # Awards & achievements
│   │   └── Contact.tsx         # Contact section
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles
├── index.html                  # HTML entry
├── vite.config.js              # Vite configuration
├── tailwind.config.cjs         # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Customization

### Update Personal Information
Edit `src/components/SEO.tsx` and `src/components/Footer.tsx` to update:
- Name and email
- Social media links
- Professional information

### Modify Content
- Update section content in `src/pages/`
- Edit project details in `src/pages/Projects.tsx`
- Customize skills in `src/pages/Skills.tsx`

### Styling
- Tailwind classes: `src/index.css` and component files
- Color scheme: Update Tailwind gradient classes (currently Cyan & Violet)
- Animations: Modify Framer Motion variants in component files

## ✨ Performance Optimizations

- Code splitting via Vite
- Image optimization
- Minified CSS and JavaScript
- Fast page loads with Vite's instant HMR
- SEO-friendly structured data

## 📞 Contact

- **Email**: kaarthickeyan.d@gmail.com
- **Phone**: +91 63830 42509
- **GitHub**: [kaarthickeyan](https://github.com/kaarthickeyan)
- **LinkedIn**: [kaarthickeyan](https://www.linkedin.com/in/kaarthickeyan)

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ by Kaarthickeyan D

## Install the full project (includes Tailwind & router)

```cmd
cd %USERPROFILE%\Documents\Portfolio_react\portfolio
npm install
npm run dev
```

Vite will process Tailwind via PostCSS. Open `http://localhost:5173`.

## Deploy

- Vercel: Connect the repo to Vercel and it will detect the Vite app. Build command: `npm run build`, Publish directory: `dist`.
- Netlify: Connect the repo and set build command `npm run build` and publish directory `dist`. Optionally add a `netlify.toml` later.

When you're ready, paste your projects, internships, and skills and I'll add them to the `Projects` and `About` sections and format them consistently.