import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": "http://backend:3001"
    }
  }
};
