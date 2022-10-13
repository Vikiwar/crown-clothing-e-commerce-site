import { user_Action_Types } from "./user.types";

const initial_State = {
  currentUser: null,
};

export const userReducer = (state = initial_State, action) => {
  const { type, payload } = action;

  switch (type) {
    case user_Action_Types.set_Current_User:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
