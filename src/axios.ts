import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiMTIzQDEyMy5ydSIsImxvZ2luIjoiMTIzIiwiaWF0IjoxNzE5ODU2NzE0LCJleHAiOjE3MjA0NjE1MTR9.Qfjpd4zyJ1ny-Hme54OR4s5ZEw2zR_8f_4WDAtyqe_A";
export const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    common: {
      Authorization: `Bearer ${token}`,
    },
  },
});
