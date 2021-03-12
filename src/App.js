import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Domain from './components/Domain/Domain';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/domains'>Domains</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path='/' component={() => <h2>Choose a Domain</h2>} />

          <Route path='/domains' component={() => <Domain />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
