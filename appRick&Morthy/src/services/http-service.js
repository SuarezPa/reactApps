import { endPointCharacters } from '../constans.js';
import axios from 'axios';

export const consultClients = async () => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
  };
  let response = await axios.get(endPointCharacters, config);
  const data = response.data.results ?? response.data; // adapta según tu API
  // console.log('Respuesta de consultClients:');
  // console.log(response.data);
  return data;
};
