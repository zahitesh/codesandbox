import { store } from "../store/store";
import { BUY_CAKE } from "../store/action";

//reducer
export const reducer = (state = store, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakeCount: state.cakeCount - action.payload
      };
    default:
      return state;
  }
};
