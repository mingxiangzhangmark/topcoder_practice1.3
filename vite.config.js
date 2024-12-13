import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'src/about.html',
        img:'img/cartoon_image_man.png'
      },
    },
  },
});
