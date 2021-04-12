import { createStore } from "redux";

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE = "BUY_ICE";

const cakeStore = {
  numOfCake: 10
};

const iceCreamStore = {
  numOfIceCream: 20
};

function buyCake() {
  return {
    type: BUY_CAKE,
    payload: 1
  };
}

function buyIce() {
  return {
    type: BUY_ICE,
    payload: 1
  };
}

const reducer = (state = cakeStore, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload
      };
    case BUY_ICE:
      return {
        ...state,
        numOfCake: state.numOfIceCream - action.payload
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());
store.subscribe(() => {
  console.log("Updated store", store.getState());
});
store.dispactch(buyCake);
store.dispactch(buyIce);
