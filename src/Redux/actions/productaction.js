import { Actionstypes } from "../constatnts/action_types"
export const setproducts = (products) => {
    return {
        type: Actionstypes.SET_PRODUCTS,
        payload:products,
    
    }
}
export const selectedproducts = (product) => {
    return {
        type: Actionstypes.SELECTED_PRODUCTS,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
  return {
      type: Actionstypes.REMOVE_SELECTED_PRODUCTS
  };
};