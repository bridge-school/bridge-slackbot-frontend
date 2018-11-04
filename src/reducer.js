import { BRIDGEBOT_ACTIONS } from "./constants";

export const INITIAL_STATE = {
  pollGroups: [],
  pollQuestion: "",
  selectedPollGroup: "",
  selectedPollGroupUsers: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
  if (!action) return state;
  switch (action.type) {
    case BRIDGEBOT_ACTIONS.RESET_FORM: {
      return {
        ...state,
        pollQuestion: "",
        selectedPollGroup: "",
      }
    }
    case BRIDGEBOT_ACTIONS.SAVE_USERS: {
      return {
        ...state,
        selectedPollGroupUsers: action.payload
      }
    }
    case BRIDGEBOT_ACTIONS.SAVE_POLL_GROUPS: {
      return {
        ...state,
        pollGroups: action.payload,
      }
    }
    case BRIDGEBOT_ACTIONS.SET_POLL_GROUP: {
      return {
        ...state,
        selectedPollGroup: action.payload,
      }
    }
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
    