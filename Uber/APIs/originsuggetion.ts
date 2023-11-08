import axios, { AxiosResponse } from "axios";
import { OriginTypes } from "../Types/originquery";

export const SearchOriginSuggetion = async (query: string) => {
  try {
    if (query.length > 0) {
      let res: AxiosResponse<OriginTypes[]> = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query.trim()}&limit=6&appid=9ee9544bc98e279e7d6ddb88f7db6e22`
      );
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};
