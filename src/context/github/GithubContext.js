import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        // slowly remove all functions passed here to dispatch action from our comp not functions in our context that we pass down to our components
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
