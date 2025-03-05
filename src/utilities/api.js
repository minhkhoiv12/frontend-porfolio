import axios from "axios";
const production_api = "https://backend-portfolio-soka.onrender.com";

const api = axios.create({
  baseURL: production_api,
  withCredentials: true,
});
export default api;
