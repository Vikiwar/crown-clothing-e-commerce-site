import { CATEGORIES_ACTION_TYPES } from "./category.types";

const initial_State = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = initial_State, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_success:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_failed:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
