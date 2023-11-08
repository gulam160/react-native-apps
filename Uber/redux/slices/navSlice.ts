import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../strore";

const initialState = {
  origin: { description: "", location: { lat: 0, lng: 0 } },
  destination: { description: "", location: { lat: 0, lng: 0 } },
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
