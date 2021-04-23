import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Caesar from '../Caesar/Caesar';
import Header from '../../components/Header/Header';

const Root = () => {
  //state for password
  const [inputValue, setInputValue] = useState('');

  //function updating password value
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Login
                inputValueHandler={inputValueHandler}
                inputValue={inputValue}
              />
            )}
          />

          {/* Route exist if user typed some password - probably a bit stupid and incorrect, but simple and uncomplicated :D */}
          <Route path="/caesar/:id" component={Caesar} />
        </Switch>
      </Router>
    </>
  );
};

export default Root;
