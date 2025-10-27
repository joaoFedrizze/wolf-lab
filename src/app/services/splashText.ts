import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export async function getSplashtexts() {
  const response = await axios.get(`${API_BASE_URL}/splashtext`);
  return response.data.splashtexts;
}
