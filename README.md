# Personal Portfolio Website

A clean, modern personal portfolio website with a writer-focused aesthetic. Built with semantic HTML, responsive CSS, and vanilla JavaScript.

## 🎨 Design Features

- **Writer-centric design** with beige and burgundy color scheme
- **Serif typography** using Source Serif 4 and Crimson Text fonts
- **Fully responsive** layout that works on all devices
- **Accessibility optimizations** including reduced motion support
- **SEO optimized** with comprehensive meta tags and structured data

## 🚀 Live Demo

Visit the live site: [https://yourusername.github.io/](https://yourusername.github.io/)

## 📱 Sections

- **Hero Section**: Introduction with profile image placeholder
- **About Me**: Personal background and story
- **Projects**: Featured work with descriptions
- **Contact**: LinkedIn and GitHub links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Interactive navigation and smooth scrolling
- **Google Fonts**: Professional serif typography

## 📋 Quick Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Customize the content**
   - Update personal information in `index.html`
   - Replace placeholder links with your actual profiles
   - Add your profile image to `/images/` folder
   - Modify projects section with your own work

3. **Deploy to GitHub Pages**
   - Push to your GitHub repository
   - Enable GitHub Pages in repository settings
   - Your site will be available at `https://yourusername.github.io/`

## ✏️ Customization Guide

### Personal Information
Update the following in `index.html`:
- Replace "Your Name" with your actual name
- Update the hero subtitle and about text
- Replace LinkedIn and GitHub URLs with your profiles
- Update meta tags with your information

### Colors
The color scheme is defined in CSS custom properties at the top of `css/style.css`:
```css
:root {
    --primary-color: #8b1538;    /* Burgundy red */
    --background: #f5f1eb;       /* Warm beige */
    --accent-color: #d4845c;     /* Burnt orange */
    /* ... other colors */
}
```

### Profile Image
Replace `images/profile-placeholder.svg` with your own image, or update the image reference in `index.html`.

## 📖 Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and responsive design
├── js/
│   └── script.js      # Interactive functionality
├── images/
│   └── profile-placeholder.svg
└── README.md          # This file
```

## 🎯 SEO & Performance Features

- **Structured Data**: Schema.org markup for better search results
- **Open Graph**: Social media sharing optimization
- **Performance**: Optimized fonts, DNS prefetching, and efficient CSS
- **Accessibility**: Semantic HTML, proper contrast ratios, reduced motion support
- **Mobile-first**: Responsive design that works on all screen sizes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

---

**Note**: Remember to update all placeholder content with your actual information before deploying!