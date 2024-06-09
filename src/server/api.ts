import axios from "axios";

const baseURL = "http://localhost:8081/api";

export const api = axios.create({
  baseURL,
});
