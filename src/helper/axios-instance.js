import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});

export default axiosInstance;
