# Copilot Instructions

This is a solution for a [Frontend Mentor](https://www.frontendmentor.io) challenge. The goal is to build a social links profile page using HTML and CSS.

## Project Overview

The project is a single-page static website. The main task is to replicate the design provided in the `/design` folder as closely as possible, ensuring it is responsive for both mobile and desktop views.

## Key Files

- `index.html`: This is the main file where the HTML structure of the profile card should be built.
- `style-guide.md`: This file is the source of truth for design specifications. It contains the color palette, typography details (font family, sizes, and weights), and layout widths for mobile and desktop.
- `design/`: This directory contains the JPG mockups for the mobile and desktop versions of the design (`mobile-design.jpg` and `desktop-design.jpg`). Use these as a visual guide.
- `assets/`: This folder contains all necessary assets, including the profile picture (`assets/images/avatar-jessica.jpeg`) and the `Inter` font files (`assets/fonts`).

## Development Workflow

1.  **HTML Structure**: Start by structuring the content in `index.html`. Use semantic HTML.
2.  **Styling**:
    - Create a new CSS file (e.g., `style.css`) for your styles and link it in `index.html`.
    - Use the `style-guide.md` for color variables and font settings.
    - The primary font is "Inter", which is provided locally in the `assets/fonts` directory. You should set up `@font-face` rules to use these local font files.
    - Implement a mobile-first approach. Styles for the mobile layout should be the default, and use media queries to add or adjust styles for the desktop layout (breakpoint at 1440px, but make it responsive).
3.  **Responsiveness**: Ensure the layout is responsive and looks good on screens between 375px and 1440px wide.
4.  **Interactive Elements**: The social link buttons should have hover and focus states as shown in `design/active-states.jpg`.

## Example of using the style guide

When setting colors, refer to `style-guide.md`. For example, the primary green color for interactive elements is `hsl(75, 94%, 57%)`. The background is a dark grey.

```css
:root {
  --primary-green: hsl(75, 94%, 57%);
  --neutral-white: hsl(0, 0%, 100%);
  --neutral-grey-700: hsl(0, 0%, 20%);
  --neutral-grey-800: hsl(0, 0%, 12%);
  --neutral-grey-900: hsl(0, 0%, 8%);
}

body {
  background-color: var(--neutral-grey-900);
  color: var(--neutral-white);
  font-family: 'Inter', sans-serif;
}
```
d