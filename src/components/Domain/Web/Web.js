import React from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
const Web = () => {
  const { path } = useRouteMatch();
  const techs = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Vue' },
  ];
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
        <Route path={`${path}/1`} component={() => <h2>REACT</h2>} />
        <Route path={`${path}/2`} component={() => <h2>ANGULAR</h2>} />
        <Route path={`${path}/3`} component={() => <h2>VUE</h2>} />
      </Switch>
    </>
  );
};

export default Web;
