import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Web from './Web/Web';
import Mobile from './Mobile/Mobile';
const Domain = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${path}/web`}>Web</Link>
        </li>
        <li>
          <Link to={`${path}/mobile`}>Mobile</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path={`${path}/web`} component={() => <Web />} />
        <Route path={`${path}/mobile`} component={() => <Mobile />} />
      </Switch>
    </div>
  );
};

export default Domain;
