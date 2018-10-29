import { BRIDGEBOT_ACTIONS } from "./constants";

export const INITIAL_STATE = {
  pollGroups: [],
  pollQuestion: "",
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRIDGEBOT_ACTIONS.SET_POLL_QUESTION: {
      return {
        ...state,
        pollQuestion: action.payload,
      }
    }
    default:
      return state;
  }
};
    