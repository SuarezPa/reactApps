import { endPointCharacters } from '../util/constans';
import axios from 'axios';

export const consultClients = async (page) => {
  const url = `${endPointCharacters}`;
  let config = {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    params: { page: page },
  };
  const response = await axios.get(url, config);
  const results = response.data.results ?? response.data;
  console.log('results:', results);
  const info = response.data.info ?? null;
  return { results, info };
};
