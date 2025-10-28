import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer MTE.pT67lK-4fykAKIjS3bT1aMrw9P_RwD1EHNYYBuDhNtAfJcINoKWiKPuzugBm`,
  },
});

export {api};
