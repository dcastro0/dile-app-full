import axios from "axios";

const baseURL = "https://f249-38-183-120-2.ngrok-free.app/api";

export const api = axios.create({
  baseURL,
});
