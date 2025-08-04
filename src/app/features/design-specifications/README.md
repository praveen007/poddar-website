# Design Specifications Page

This module contains the Angular components for the Design and Specification page, converted from the original HTML design.

## Components

### Main Page Component
- `design-specifications-page.component.ts` - Main page component that orchestrates all sections

### Section Components
- `banner-section.component.ts` - Hero banner with breadcrumb navigation
- `technical-calculation.component.ts` - Technical calculation tools section
- `bim-cad.component.ts` - BIM & CAD section
- `specification-advice.component.ts` - Specification advice card section
- `design-support.component.ts` - Design support section

### Shared Components
- `content-card.component.ts` - Reusable content card with title, description, and CTA
- `image-box.component.ts` - Reusable image container with animations

## Features

### Responsive Design
- Mobile-first approach using Bootstrap grid system
- Responsive breakpoints for different screen sizes
- Optimized layouts for mobile, tablet, and desktop

### Animations
- AOS (Animate On Scroll) integration
- Smooth hover effects on buttons and images
- Transition animations for better UX

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Proper heading hierarchy

## Usage

The page is accessible via the route `/design-and-specifications` and includes:

1. **Banner Section** - Hero section with title, description, and breadcrumb
2. **Technical Calculation Tools** - Two-column layout with content and image
3. **BIM & CAD** - Reversed layout with image and content
4. **Specification Advice** - Card-based layout with gradient background
5. **Design Support** - Two-column layout with image and content

## Data Structure

The components use TypeScript interfaces for type safety:

- `BannerData` - Banner section data
- `TechnicalCalculationData` - Technical calculation section data
- `BimCadData` - BIM CAD section data
- `SpecificationAdviceData` - Specification advice section data
- `DesignSupportData` - Design support section data

## Styling

All components use SCSS for styling with:
- Modular CSS architecture
- Responsive design patterns
- Consistent color scheme and typography
- Smooth animations and transitions

## Future Enhancements

- Add more section components (Design Support, etc.)
- Implement lazy loading for images
- Add more interactive features
- Enhance accessibility features
- Add unit tests for components 