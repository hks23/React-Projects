- Theory to study 
>[GIT article - Virtual DOM](https://github.com/acdlite/react-fiber-architecture)

##How to create a Vite project
- npm create vite@latest
- cd <folder_name>
- npm installl
- npm run dev

##for tailwind 
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

##In tailwind.config.js
- /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

##In index.css
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

<!-- ____________________________________________________________________________________________________________________ -->
