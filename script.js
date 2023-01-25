import store from "./store/configStore.js";

console.log(store.getState());
store.dispatch({ type: "INCREMENTAR" });
console.log(store.getState());
