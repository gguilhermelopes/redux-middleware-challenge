import store from "./store/configStore.js";
import { tokenFetch } from "./store/token.js";

async function login(user) {
  const state = store.getState();
  if (state.token.data === null) await store.dispatch(tokenFetch(user));
}

login({ username: "dog", password: "dog" });
