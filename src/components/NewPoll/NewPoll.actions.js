import { BRIDGEBOT_ACTIONS } from "../../constants";

export const handleChangePollQuestion = e => ({
    type: BRIDGEBOT_ACTIONS.SET_POLL_QUESTION,
    payload: e.target.value
});