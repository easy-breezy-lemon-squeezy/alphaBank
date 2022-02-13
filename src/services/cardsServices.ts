import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants/api';
import { ICard } from '../models/ICard';

export class CardsServices {
  static async getUsers(): Promise<AxiosResponse<ICard[]>> {
    return await axios.get<ICard[]>(API_URL);
  }
}
