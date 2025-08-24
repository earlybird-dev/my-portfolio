# My Portfolio

A modern, responsive portfolio website built with React showcasing my skills, projects, and experience.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional design with animations
- **Component-Based**: Modular React components for easy maintenance
- **Skills Showcase**: Visual representation of technical skills
- **Project Gallery**: Display of featured projects with images
- **Experience Timeline**: Professional experience and background
- **Contact Integration**: Easy way for visitors to get in touch

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Styling**: Bootstrap 5.2.3, Sass, CSS3
- **Animations**: Animate.css
- **Build Tool**: Create React App
- **Deployment**: Firebase Hosting

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Sass globally (if not already installed):
   ```bash
   npm install -g sass
   ```

## 🏃‍♂️ Running the Project

### Development Mode

```bash
npm start
```

Opens the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

### Run Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

## 🚀 Deployment

This project is configured for Firebase Hosting:

1. Initialize Firebase (first time only):

   ```bash
   firebase init
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── assets/images/          # Favicon and app icons
│   └── index.html             # HTML template
├── src/
│   ├── components/            # React components
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Main.jsx          # Main content area
│   │   ├── Skills.jsx        # Skills showcase
│   │   ├── Projects.jsx      # Project gallery
│   │   ├── Experience.jsx    # Experience timeline
│   │   └── Footer.jsx        # Footer component
│   ├── images/               # Project and skill images
│   ├── css/                  # Compiled CSS files
│   ├── scss/                 # Sass source files
│   ├── App.js               # Main App component
│   └── index.js             # React entry point
├── firebase.json            # Firebase configuration
└── package.json            # Project dependencies
```

## 🎨 Customization

To customize this portfolio for your own use:

1. **Replace Images**: Update images in `src/images/` with your own
2. **Update Content**: Modify component files to reflect your information
3. **Styling**: Edit Sass files in `src/scss/` to change the design
4. **Skills**: Add/remove skill icons and descriptions in the Skills component
5. **Projects**: Update project screenshots and descriptions in the Projects component

## 📱 Components

- **Header**: Navigation and branding
- **Main**: Hero section and main content
- **Skills**: Technical skills with visual icons
- **Projects**: Portfolio projects with images and descriptions
- **Experience**: Professional background and timeline
- **Footer**: Contact information and links

## 🔧 Available Scripts

| Script          | Description                                |
| --------------- | ------------------------------------------ |
| `npm start`     | Run development server                     |
| `npm run build` | Build for production                       |
| `npm test`      | Run test suites                            |
| `npm run eject` | Eject from Create React App (irreversible) |
