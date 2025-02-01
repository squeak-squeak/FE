import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    svgr({
      include: '**/*.svg'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      // 로그인과 회원가입 엔드포인트에는 rewrite 옵션을 적용하여 "/api"를 제거
      '/api/login': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/api/join': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 그 외의 "/api" 요청은 rewrite 없이 그대로 전달 (예: /api/groups/search → 그대로 백엔드에 전달)
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
});
