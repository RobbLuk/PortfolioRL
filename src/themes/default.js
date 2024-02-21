export default {
  // Temp fonts
  fonts: {
    title: "Roboto, sans-serif", // Retaining Roboto for its professional and clear appearance
    main: "Open Sans, sans-serif" // Open Sans is known for its readability
  },
  // Colors for layout
  colors: {
    primary1: "hsl(207, 82%, 66%)", // A brighter blue for primary elements, ensuring visibility
    background1: "#0F1624",
    accent1: "hsl(12, 88%, 59%)", // A vibrant accent color for important highlights and buttons
    button: "hsl(205.1, 100%, 36.1%)", // A darker blue for buttons to stand out on the light background
    background2: "hsl(207, 26%, 17%)", // A much darker shade for elements requiring contrast without harshness
    text1: "hsl(207, 13%, 34%)", // Dark grey for primary text to ensure readability
    text2: "hsl(207, 13%, 24%)", // Even darker grey for headings or important text
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}
