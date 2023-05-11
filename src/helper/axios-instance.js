import axios from "axios";

const dictionaryInstance = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});

export default dictionaryInstance;
