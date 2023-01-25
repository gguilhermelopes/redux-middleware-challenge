const TOKEN_FETCH_STARTED = "token/FETCH_STARTED";
const TOKEN_FETCH_SUCCESS = "token/FETCH_SUCCESS";
const TOKEN_FETCH_ERROR = "token/FETCH_ERROR";

const tokenFetchStarted = () => ({ type: TOKEN_FETCH_STARTED });
const tokenFetchSuccess = (payload) => ({
  type: TOKEN_FETCH_SUCCESS,
  payload,
  localStorage: "token",
});
const tokenFetchError = (payload) => ({ type: TOKEN_FETCH_ERROR, payload });

function token(state = 0, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    default:
      return state;
  }
}

export default token;
