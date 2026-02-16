# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Emily Claudet, built as a static GitHub Pages site. The site showcases her work as a Product Manager and Game Developer with a clean, writer-focused aesthetic using beige and burgundy colors.

## Architecture

The website is a **vanilla HTML/CSS/JavaScript** static site with no build process or package manager:

- **index.html**: Single-page application with semantic HTML5 markup
- **css/style.css**: All styling including responsive design, CSS Grid/Flexbox layouts, and custom properties
- **js/script.js**: Interactive functionality including smooth scrolling, mobile navigation, and intersection observers
- **images/**: Profile photo and game project screenshots
- **CNAME**: Custom domain configuration for emilyclaudet.com

### Key Design Patterns

- **CSS Custom Properties**: Color scheme and design tokens defined in `:root` selector
- **Mobile-first responsive design**: Breakpoints at 768px and 480px
- **Semantic HTML**: Proper heading hierarchy, section elements, accessibility attributes
- **Progressive enhancement**: JavaScript adds interactivity but site works without it

## Development Workflow

### No Build Process
This site uses **vanilla web technologies** with no build step, package.json, or dependency management. Changes can be made directly to HTML, CSS, and JavaScript files.

### Local Development
1. Open `index.html` directly in a browser, or
2. Use a simple HTTP server: `python -m http.server 8000` or `npx serve .`

### Deployment
- Hosted on **GitHub Pages** with custom domain emilyclaudet.com
- Changes pushed to the `master` branch are automatically deployed
- CNAME file configures custom domain

## Content Structure

### Sections
- **Hero**: Introduction with profile image and call-to-action buttons
- **About**: Personal background and career summary  
- **Projects**: Game development portfolio with circular project images
- **Contact**: LinkedIn and GitHub links

### Images
- Profile photo: `images/profilephoto.png`
- Game projects: `images/wispchild.png`, `images/oldandgray.png`, `images/livingstons.png`
- Favicon: `images/favicon.svg` (SVG with Emily's initials)

## Styling Approach

- **Typography**: Source Serif 4 and Crimson Text fonts from Google Fonts
- **Color Variables**: Burgundy primary (#8b1538), beige background (#f5f1eb), burnt orange accent (#d4845c)
- **Animations**: CSS keyframes for fade-in effects, hover transitions
- **Accessibility**: Reduced motion support, proper contrast ratios, semantic markup

## JavaScript Features

- Mobile hamburger navigation toggle
- Smooth scrolling to sections with header offset
- Active navigation highlighting based on scroll position
- Intersection Observer for project animations
- Error handling for failed image loads
- Contact form validation (currently simulated)

## Current Branch Structure

- **master**: Main branch for production deployment
- **text-design**: Current working branch (as of conversation start)

## Common Tasks

Since this is a static site with no build process:
- **Edit content**: Modify text directly in index.html
- **Update styling**: Edit css/style.css
- **Add interactivity**: Modify js/script.js  
- **Replace images**: Update files in images/ directory
- **Deploy**: Push changes to master branch

No linting, testing, or build commands are configured as this is a simple static website.