import { ACTION_TYPES } from 'actions/actionTypes';

export const initialState = {
  currentCategory: '',
  currentPage: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case ACTION_TYPES.LOAD_MORE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case ACTION_TYPES.RELOAD_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    default:
      return state;
  }
};
