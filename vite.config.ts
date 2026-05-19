import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import postcssNesting from 'postcss-nested';
import postcssMixins from 'postcss-mixins';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  server: {
    host: true,
    port: 5173
  },
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
          mixinsFiles: fileURLToPath(
            new URL('./src/shared/styles/lib/mixins.pcss', import.meta.url)
          )
        }),
        postcssNesting,
        autoprefixer
      ]
    }
  },
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url))
    }
  }
});
