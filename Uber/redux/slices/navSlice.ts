import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../strore";
import type { Elements } from "../../Types/DistanceResponse";

export interface OrgAndDesType {
  description: string;
  location: { lat: number; lng: number };
}

interface MyInitialState {
  origin: OrgAndDesType | null;
  destination: OrgAndDesType | null;
  travellTimeInformation: Elements | null;
}

const initialState: MyInitialState = {
  origin: null,
  destination: null,
  travellTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravellTimeInformation: (state, action) => {
      state.travellTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravellTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravellTimeInformation = (state: RootState) =>
  state.nav.travellTimeInformation;

export default navSlice.reducer;
