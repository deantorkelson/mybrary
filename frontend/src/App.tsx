import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/authors'/>
            <Route path='/'/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
