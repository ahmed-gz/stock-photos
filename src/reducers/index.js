import { ACTION_TYPES } from 'actions/actionTypes';

export const initialState = {
  currentCategory: '',
  currentPage: 1,
  cancelTokens: [],
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
    case ACTION_TYPES.ADD_CANCEL_TOKEN:
      return {
        ...state,
        cancelTokens: [...state.cancelTokens, action.payload],
      };
    case ACTION_TYPES.CANCEL_PENDING_REQUESTS:
      // Cancel all requests where a token exists
      state.cancelTokens.forEach(request => {
        if (request.cancel) {
          request.cancel();
        }
      });

      // Reset the cancelTokens state
      return {
        ...state,
        cancelTokens: [],
      };
    default:
      return state;
  }
};
