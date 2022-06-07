import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '8955c4e8a1mshd6a3171441d34d5p1bc3b5jsn7ec5b73ec5de'
    }
  });

  return data;
}

  // headers: {
  //   'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  //   'X-RapidAPI-Key': '8955c4e8a1mshd6a3171441d34d5p1bc3b5jsn7ec5b73ec5de'
  // }