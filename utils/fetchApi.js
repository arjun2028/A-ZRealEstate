import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "a8b3b93625msh381f0753b7fe188p1b4e63jsnb8298584cfac",
    },
  });

  return data;
};
