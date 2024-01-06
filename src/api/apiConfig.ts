import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTE.Z_XdGIYzYjm-95x6hks7yOuXB6IffIkrHQ1GGSW5u_ZECmATmp8b0pYadmZC',
  },
});
