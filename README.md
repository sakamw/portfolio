# Isaac's Developer Portfolio

A modern, responsive developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Sass**. Showcasing my projects, skills, experience, and expertise in full-stack web development.

## 🌟 Features

- **Modern Design** - Dark theme with vibrant gradients and smooth animations
- **Responsive Layout** - Mobile-first design that works on all devices
- **Featured Projects** - Showcase of 8 real GitHub projects with live links
- **Skills Section** - Comprehensive breakdown of technical expertise across multiple categories
- **Experience Timeline** - Professional journey with detailed work experiences
- **About Section** - Personal introduction with key statistics and resume download
- **Contact Section** - Easy ways to get in touch via email and social links
- **Smooth Navigation** - Click header logo to scroll to top, smooth scroll navigation throughout
- **Interactive CTAs** - Functional buttons with scroll animations and external links

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.9
- **Styling**:
  - Tailwind CSS v4
  - Sass (SCSS)
- **Build Tool**: Vite 7.2
- **Package Manager**: pnpm
- **Development**: ESLint + TypeScript ESLint

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sakamw/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm run dev
   ```

   The app will open at `http://localhost:5173/`

## 🚀 Available Scripts

```bash
# Start development server with hot reload
pnpm run dev

# Build for production
pnpm run build

# Preview production build locally
pnpm run preview

# Lint code with ESLint
pnpm run lint
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Footer.tsx              # Footer with links
│   │   ├── ui/
│   │   │   └── Footer.tsx          # Footer component
|   |   |   └──Header.tsx           # Header component
│   │   └── sections/
│   │       ├── HeroSection.tsx      # Main hero with CTA
│   │       ├── ProjectsSection.tsx  # Featured projects grid
│   │       ├── SkillsSection.tsx    # Skills and expertise
│   │       ├── AboutSection.tsx     # About me and stats
│   │       ├── ExperienceSection.tsx # Work experience timeline
│   │       └── ContactSection.tsx   # Contact info and social links
│   ├── styles/
│   │   └── index.scss              # Global styles with Sass variables
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # Entry point
│   └── assets/                     # Static assets
├── public/                         # Public files
├── postcss.config.cjs              # PostCSS configuration
├── tailwind.config.cjs             # Tailwind CSS configuration
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## 🎨 Customization

### Update Personal Information

- **Header**: Edit `src/components/Header.tsx` to change navigation links
- **Hero Section**: Update `src/components/sections/HeroSection.tsx` with your introduction
- **About Section**: Modify `src/components/sections/AboutSection.tsx` with your bio and stats
- **Contact Section**: Update `src/components/sections/ContactSection.tsx` with your social links

### Update Projects

Edit `src/components/sections/ProjectsSection.tsx` to add/remove projects:

```tsx
const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    emoji: "🎨",
    tech: ["React", "TypeScript"],
    link: "https://github.com/yourprojects",
  },
  // Add more projects...
];
```

### Customize Styling

The portfolio uses Sass variables for easy theming. Edit `src/styles/index.scss`:

```scss
// Color palette
$primary-blue: #0ea5e9;
$primary-purple: #a855f7;
$accent-teal: #14b8a6;
// ... customize colors and styles
```

### Update Resume Link

In `src/components/sections/AboutSection.tsx`, update the resume URL:

```tsx
const resumeURL = "https://your-resume-link";
```

## 🔗 Featured Sections

### Projects

Displays 8 featured projects from your GitHub repositories with:

- Project emoji icon
- Title and description
- Technology stack tags
- Direct link to GitHub repository

### Skills

Organized into 6 categories:

- Frontend Development
- Backend Development
- Tools & DevOps
- Design
- Soft Skills
- Other Technologies

### Experience

Timeline-based work experience with:

- Job title and company
- Employment period
- Brief description
- Key highlights/technologies

### About

Personal introduction with:

- Bio paragraphs
- Key statistics (experience level, projects, technologies)
- Contact information
- Resume download link

## 🎯 Color Theme

The portfolio uses a modern dark theme with vibrant gradients:

- **Primary**: Electric Blue → Purple (#0ea5e9 → #a855f7)
- **Accent**: Teal → Orange (#14b8a6 → #f97316)
- **Background**: Dark slate gradient
- **Text**: Light gray (#f1f5f9)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

```bash
# Build the project
pnpm run build

# Push to gh-pages branch
# Configure GitHub Pages in repository settings
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm run build`
3. Set publish directory: `dist`

## 📧 Contact

For inquiries or collaboration opportunities:

- **Email**: <shanmwangi2020@gmail.com>
- **GitHub**: [github.com/sakamw](https://github.com/sakamw)
- **Portfolio**: [your-portfolio-url]

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com) and [Sass](https://sass-lang.com)
- Powered by [Vite](https://vitejs.dev)
- Component inspiration from modern web design trends

---

**Made with ❤️ by Isaac**

Last Updated: November 14, 2025
