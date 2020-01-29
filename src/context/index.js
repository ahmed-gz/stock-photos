import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from 'reducers';
import { useActions } from 'actions';

export const Context = createContext({
  state: { ...initialState },
  actions: {
    setCurrentCategory: categoryId => categoryId,
    loadMore: () => {},
    reLoadPage: () => {},
    addCancelToken: token => token,
    cancelPendingRequests: () => {},
  },
});

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);
  const contextValue = {
    state: { ...state },
    actions: { ...actions },
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
