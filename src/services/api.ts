import axios from "axios";

export const api = axios.create({
  baseURL: "127.0.0.1:3001",
  timeout: 5000,
});
