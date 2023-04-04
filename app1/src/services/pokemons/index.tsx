import axios from "axios";
import { IPokemons } from "../../types";

const api = axios.create({
  baseURL: process.env.apiUrl,
});

const getAll = async () => {
  return api.get<IPokemons>("").then(({ data }) => data);
};

export default getAll;
