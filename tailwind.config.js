// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        noto: ['Noto Color Emoji', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'dm-serif-display': ['DM Serif Display', 'serif'],
        'comic-neue': ['Comic Neue', 'cursive'],
        'edu-vic-wa-nt-beginner': ['Edu VIC WA NT Beginner', 'cursive'],
        farsan: ['Farsan', 'cursive'],
        'bad-script': ['Bad Script', 'cursive'],
        notebook: ['"Patrick Hand"', 'cursive'],
        google: ['"Google Sans Code"', 'monospace'],
        jersey: ['"Jersey 15"', 'cursive'],
        kavivanar: ['"Kavivanar"', 'cursive'],
        emoji: ['"Noto Color Emoji"', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive'],

      },
      screens: {
        // ✅ Default Tailwind breakpoints (keep these!)
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',

        // ✅ Custom breakpoints (💻 real devices, not just width)
        ipadpro: {
          raw: '(min-width: 1024px) and (hover: none) and (orientation: landscape)'
        },
        laptop: {
          raw: '(min-width: 1024px) and (hover: hover)'
        },
      },
    },
  },
  plugins: [],
}
