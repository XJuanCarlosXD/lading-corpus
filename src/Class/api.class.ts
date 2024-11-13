import axios, { AxiosInstance } from "axios";
import { Reservations, Service } from "../Utils/type";

class GetApiMethod {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        Accept: "application/json",
      },
    });
  }

  // List of Service
  public async getServices(): Promise<Service[]> {
    try {
      const response = await this.axiosInstance.get<Service[]>(`/services/`);
      return response.data;
    } catch (error) {
      throw new Error(`Error en getPropeties: ${error}`);
    }
  }

  // List of Propeties Create
  public async createReservation(data: Reservations) {
    try {
      const response = await this.axiosInstance.post<Reservations>(
        `/reservations/`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error en getPropeties: ${error}`);
    }
  }
}

export default GetApiMethod;
