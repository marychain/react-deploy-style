import React, { useReducer, useCallback } from 'react';
import { Switch } from 'react-router-dom';
import { appRoutes } from './routes/index';
import {Navigation} from './component/navigation';
import { Route } from './component/route';
import './component/css/header.css';
import './component/css/form.css';
import './component/css/button.css';
import './component/css/icon.css';
import './component/css/input.css';
import './App.css';

export const Store = React.createContext(); 

const initialState = {
  user: null,
  isAuthenticated: false
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: payload,
        isAuthenticated: true
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isAuthenticated: false
      }
    default:
      return state;
  }

}

const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = useCallback((user) => {
      dispatch({
        type: 'LOGIN_USER',
        payload: user
      })
    }, []);

    const logoutUser = useCallback(() => {
      dispatch({type: 'LOGOUT_USER'})
    }, []);

  return {
    state,
    actions: {
      loginUser,
      logoutUser
    }
  };
};

function App() {
  const store = useStore();
  return (
    <Store.Provider value={store}>
    <div className="App">
      <header className='header'>
        <Navigation />
      </header>
      <main className='content'>
        <Switch>
          { appRoutes.map(route => (
            <Route key={route.path} { ...route} />
          ))}
        </Switch>
      </main>
    </div>
  </Store.Provider>
  );
};

export default App;

