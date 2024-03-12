import axios, { AxiosInstance, AxiosResponse } from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2/";

export class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getPokemon(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await this.client.get(
        "pokemon/ditto"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

const services = new ApiService();

export default services;
