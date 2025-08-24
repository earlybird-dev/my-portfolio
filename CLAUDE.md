# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server (localhost:3000)
npm start

# Production build (outputs to build/ folder)
npm run build

# Run tests in interactive watch mode
npm test

# Install Sass globally if needed
npm install -g sass
```

## Firebase Deployment

```bash
# Initialize Firebase (first time only)
firebase init

# Build and deploy
npm run build
firebase deploy
```

## Architecture Overview

This is a single-page React portfolio website with the following structure:

### Component Hierarchy
- **App.js**: Main container that renders Header → Main → Footer
- **Main.jsx**: Content wrapper that renders Skills → Projects → Experience sections
- **Header.jsx**: Navigation bar and animated hero section with sunrise/clouds animations
- **Footer.jsx**: Contact section and social links

### Styling System
- **Primary**: Sass-based styling system in `src/scss/index.scss`
- **Framework**: Bootstrap 5 with extensive custom theme colors and variables
- **Fonts**: Space Grotesk (primary) and Nabla variable font (headers)
- **Animations**: Custom CSS animations for sunrise, flying birds, moving clouds, and 3D icons

### Key Design Elements
- **Color Palette**: Dark theme with custom Bootstrap colors (black, darkgray, green, blue variants)
- **Typography**: Uses Nabla variable font with custom palette mixins for depth effects
- **Animations**: Complex sunrise scene with animated sun, birds, and clouds in header
- **Responsive**: Mobile-first design with Bootstrap breakpoints

### Content Structure
- **Skills**: Visual grid of technology icons with hover overlays
- **Projects**: Gallery with project screenshots and descriptions
- **Experience**: Accordion-style timeline of professional background
- **Contact**: Social links and contact information

### Asset Organization
- `src/images/skills/`: Technology skill icons
- `src/images/projects/`: Project screenshots  
- `public/assets/images/`: App icons and favicons

The codebase uses Create React App configuration with Firebase hosting setup. The main complexity lies in the elaborate CSS animation system and custom Bootstrap theming rather than JavaScript functionality.