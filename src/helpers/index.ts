import { getAllOrder, getDataShop, getShop, sendOrder } from "./api";
import { errorCallback, successCallback } from "./getLocation";
import {
  clearValueLocalStorage,
  getValueLocalStorage,
  setValueLocalStorage,
} from "./localStorage";
import { reducer } from "./reducer";

export {
  clearValueLocalStorage,
  errorCallback,
  getAllOrder,
  getDataShop,
  getShop,
  getValueLocalStorage,
  reducer,
  sendOrder,
  setValueLocalStorage,
  successCallback,
};
