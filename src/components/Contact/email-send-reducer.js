const defaultState = { isSending: false, sendSuccessful: null };
const reducer = (state, action) => {
  switch (action.type) {
    case "SENDING":
      return { isSending: true, sendSuccessful: state.sendSuccessful };
    case "NOT_SENDING":
      return { isSending: false, sendSuccessful: state.sendSuccessful };
    case "SEND_SUCCESSFUL":
      return { isSending: state.isSending, sendSuccessful: true };
    case "SEND_UNSUCCESSFUL":
      return { isSending: state.isSending, sendSuccessful: false };
    default:
      return defaultState;
  }
};

const emailSendReducer = {
  reducer,
  defaultState
};

export default emailSendReducer;
