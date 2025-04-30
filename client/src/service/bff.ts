import axios from "axios";

export const bff = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
