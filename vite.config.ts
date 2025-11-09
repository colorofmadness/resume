import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import postcssNesting from 'postcss-nested';
import postcssMixins from 'postcss-mixins';

export default defineConfig({
  plugins: [
    vue(),
    createSvgSpritePlugin({
      include: '**/icons/**/*.svg',
      symbolId: '[name]-[hash]'
    })
  ],
  css: {
    modules: {
      generateScopedName:
        process.env.NODE_ENV === 'production' ? '[hash:base64:8]' : '[local]--[hash:base64:5]'
    },
    postcss: {
      plugins: [
        postcssMixins({
          mixinsFiles: fileURLToPath(new URL('./src/assets/style/_mixins.pcss', import.meta.url))
        }),
        postcssNesting
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url))
    }
  }
});
