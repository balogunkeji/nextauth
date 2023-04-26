import axios from "axios";

const BASE_URL = "https://staging-api.filmmakersmart.com";
// const BASE_URL = "http://174.138.79.232";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
