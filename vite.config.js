import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://velmoren.github.io/my-finance-mate/',
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        'about': resolve(__dirname, 'about.html'),
        'honors': resolve(__dirname, 'honors.html'),
        'account-types': resolve(__dirname, 'account-types.html'),
        'esg': resolve(__dirname, 'esg.html'),
        'islamic-accounts': resolve(__dirname, 'islamic-accounts.html'),
        'platform': resolve(__dirname, 'platform.html'),
        'support-center': resolve(__dirname, 'support-center.html'),
        'documents': resolve(__dirname, 'documents.html'),
        'contacts': resolve(__dirname, 'contacts.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})