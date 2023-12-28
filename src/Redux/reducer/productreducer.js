
import { Actionstypes } from "../constatnts/action_types"
const initialstate = {
    products: [ ],
};
export const productreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case Actionstypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case Actionstypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case Actionstypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};