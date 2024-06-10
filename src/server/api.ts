import axios from "axios";

const baseURL = "http://192.168.0.110:8081/api";

export const api = axios.create({
  baseURL,
});
