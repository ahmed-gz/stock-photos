import { ACTION_TYPES } from './actionTypes';

export const useActions = (state, dispatch) => ({
  setCurrentCategory: categoryId =>
    dispatch({ type: ACTION_TYPES.SET_CURRENT_CATEGORY, payload: categoryId }),
  loadMore: () => dispatch({ type: ACTION_TYPES.LOAD_MORE }),
  reLoadPage: () => dispatch({ type: ACTION_TYPES.RELOAD_PAGE }),
});
