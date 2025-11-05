import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer Mg.5DX3jk_jpR1K1C4dxpr-7tb1JIdS_4Q3HG096wX9Ne4pWLtR_V9Gmb5ceHL0`,
  },
});

export {api};
