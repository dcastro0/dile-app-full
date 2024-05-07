import axios from "axios"

export const api = axios.create({
  baseURL: "https://dile-app-full.vercel.app",
})