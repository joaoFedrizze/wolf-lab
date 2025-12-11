import axios from "axios";
import { serverAddress } from "../config";

const API_BASE_URL = `${serverAddress}:8080`;

export async function getSplashtexts() {
  const response = await axios.get(`${API_BASE_URL}/splash-text/list`);
  return response.data;
}
