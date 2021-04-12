import "./styles.css";

import { createStore } from "redux";
import Comp1 from "./screens/Comp1";
import Comp2 from "./screens/Comp2";
import { reducer } from "./store/reducer";
import buyCake from "./store/action";

export default function App() {
  const store = createStore(reducer);
  console.log("Initial state", store.getState());

  const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState());
  });

  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());

  unsubscribe();

  return (
    <div className="App">
      <Comp1 fname="Hitesh" />
      <Comp2 lname="Za" />
    </div>
  );
}
