import { createAction } from "../../utlis/reducer/reducer.utlis";

import { user_Action_Types } from "./user.types";
export const setCurrentUser = (user) =>
  createAction(user_Action_Types.set_Current_User, user);
