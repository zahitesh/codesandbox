import "./styles.css";

import { createStore } from "redux";
import Comp1 from "./screens/Comp1";
import Comp2 from "./screens/Comp2";
import { reducer } from "./store/reducer";
import buyCake from "./store/action";

export default function App() {
  //createStore
  const store = createStore(reducer);
  console.log("Initial state", store.getState());
  //subscribe to the store to listen any change in state
  const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState());
  });
  // dispatch actions
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  // unsubscribe
  unsubscribe();

  return (
    <div className="App">
      <Comp1 fname="Hitesh" />
      <Comp2 lname="Za" />
    </div>
  );
}
