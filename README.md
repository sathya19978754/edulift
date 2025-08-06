# EduLift - Online Learning Platform

## Overview

EduLift is a static educational website that provides an online learning platform interface. The project is built as a multi-page static website featuring course catalogs, pricing plans, payment processing, and user authentication interfaces. It serves as a comprehensive educational platform template with modern web design patterns and responsive layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Multi-Page Application**: Built using vanilla HTML, CSS, and JavaScript with a traditional page-based navigation structure
- **Responsive Design Framework**: Bootstrap 5.3.0 for responsive grid system and component styling
- **Typography and Icons**: Google Fonts (Open Sans) for typography and Font Awesome 6.0.0 for iconography
- **CSS Architecture**: Custom CSS variables for consistent theming with a purple gradient color scheme
- **Modular Page Structure**: Organized into separate directories for each major section (home, catalog, about, etc.)

### Design Patterns
- **Component-Based Styling**: Reusable CSS classes for navigation, buttons, forms, and layout components
- **Mobile-First Approach**: Responsive design with mobile navigation toggles and adaptive layouts
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features
- **Consistent Navigation**: Shared navigation component across all pages with active state management

### File Organization
- **Assets Directory**: Centralized CSS, JavaScript, and image assets
- **Page Directories**: Each major section has its own directory with an index.html file
- **Relative Linking**: All internal links use relative paths for portability
- **Shared Components**: Common elements like navigation and modals are consistently implemented across pages

### User Interface Features
- **Shopping Cart Interface**: Visual cart icon with item count display
- **Modal System**: Login and cart modals using Bootstrap modal components
- **Search Functionality**: Integrated search box in navigation with JavaScript handling
- **Payment Flow**: Dedicated payment and payment success pages
- **Course Catalog**: Structured catalog page for course browsing

## External Dependencies

### CSS Frameworks and Libraries
- **Bootstrap 5.3.0**: Primary UI framework for responsive design and components
- **Google Fonts**: Open Sans font family for typography
- **Font Awesome 6.0.0**: Icon library for user interface elements

### CDN Dependencies
- All external dependencies are loaded via CDN for simplicity and performance
- No package management system or build process required
- Direct browser compatibility without compilation steps

### Third-Party Integrations
- **Payment Processing**: Payment flow interface prepared for integration with payment providers
- **Authentication System**: Login modal interface ready for backend authentication integration
- **Search Functionality**: Frontend search interface prepared for backend search API integration

### Browser Compatibility
- Modern browser support through Bootstrap 5 and CSS custom properties
- Progressive enhancement ensures basic functionality across all browsers
- No server-side dependencies or database requirements
