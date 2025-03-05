import axios from "axios";
const production_api = "https://test11-liard-xi.vercel.app";

const api = axios.create({
  baseURL: production_api,
  withCredentials: true,
});
export default api;
