import axios from "axios";
import apiConfig from "../api.config.json";

function searchGifs(searchTerm) {
  let apiKey = apiConfig["API_KEY"];
  let apiUrl = apiConfig["API_URL"];
  let query = searchTerm.split(" ").join("+");

  return axios.get(`${apiUrl}/search?q=${query}&api_key=${apiKey}&limit=10`);
}

export default searchGifs;
