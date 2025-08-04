# Why Poddar Component

This Angular component replicates the design and structure of the original `why.poddar.html` file, providing a modern, responsive implementation using Angular best practices.

## Features

- **Fully Responsive**: Works on mobile, tablet, and desktop devices
- **Modern Design**: Clean, professional layout with hover effects and animations
- **Semantic HTML**: Uses proper HTML5 semantic tags
- **Accessible**: Includes ARIA labels and proper navigation structure
- **Modular**: Built using Angular standalone components

## Sections

1. **Banner Section**: Hero section with background image and breadcrumb navigation
2. **Our Culture and Values**: Three cards showcasing company values with icons
3. **Diversity & Inclusion**: Purpose, Vision, and Mission sections with alternating image/text layout
4. **Great Place to Work**: Banner section highlighting company achievements

## Usage

```html
<app-why-poddar></app-why-poddar>
```

## Route

The component is accessible at `/why-poddar`

## Assets

Placeholder images and icons are included in `src/assets/why-poddar/`. Replace these with actual images:

- `banner-bg.jpg` - Hero background image (1920x600px)
- `purpose.jpg` - Purpose section image (600x400px)
- `vision.jpg` - Vision section image (600x400px)
- `mission.jpg` - Mission section image (600x400px)
- `gptw.jpg` - Great Place to Work image (600x400px)
- `*.svg` - Icons for culture values cards

## Styling

The component uses SCSS with:
- Responsive design with mobile-first approach
- CSS Grid and Flexbox for layouts
- Smooth animations and transitions
- Bootstrap-compatible utility classes
- Custom color scheme and typography

## Dependencies

- Angular Common Module
- No external dependencies required 