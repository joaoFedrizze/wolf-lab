import axios from "axios";
import { serverAddress } from "../config";

const API_BASE_URL = `${serverAddress}:8080`;

export async function getPatch() {
  const response = await axios.get(`${API_BASE_URL}/patch`);
  return response.data;
}
