import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://drawing-board-api.onrender.com",
  withCredentials: true,
});

export default apiRequest;
