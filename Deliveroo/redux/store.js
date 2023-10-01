import { combineReducers, legacy_createStore } from "redux";
import { reducer as basketReducer } from "../redux/Basket/basket.reducer";
import { reducer as restaurantReducer } from "./Restaurants/restaurants.reducer";

const rootReducers = combineReducers({ basketReducer, restaurantReducer });

export const store = legacy_createStore(rootReducers);
