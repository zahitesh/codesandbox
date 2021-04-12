export const BUY_CAKE = "BUY_CAKE";

//action creater
export default function buyCakes() {
  //return action which is basically an object with type property
  return {
    type: BUY_CAKE,
    payload: 1
  };
}
