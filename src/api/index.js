import axios from 'axios';

export const fetchFish = async () => {
  try {
    const { data } = await axios.get('http://acnhapi.com/v1/fish/');
    return data;
  } catch (e) {
    throw e;
  }
};
