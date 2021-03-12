import React from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
const techs = [
  { id: 1, name: 'Flutter' },
  { id: 2, name: 'React Native' },
  { id: 3, name: 'Kotlin' },
];
const Mobile = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <Link to={`${path}/${tech.id}`}>{tech.name}</Link>
            <br />
          </li>
        ))}
      </ul>
      <hr />
      <Switch>
        <Route path={`${path}/1`} component={() => <h2>FLUTTER</h2>} />
        <Route path={`${path}/2`} component={() => <h2>REACT NATIVE</h2>} />
        <Route path={`${path}/3`} component={() => <h2>KOTLIN</h2>} />
      </Switch>
    </>
  );
};

export default Mobile;
