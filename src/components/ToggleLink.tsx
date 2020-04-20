import React from 'react';
import { Route, Link } from 'react-router-dom';

const ToggleLink = (props: any) => {
  const { to, exact, children } = props;
  const {
    className: baseClasses = 'm-2 btn btn-block',
    activeClass = 'btn-primary',
    inActiveClass = 'btn-secondary',
  } = props;
  return (
    <Route path={to} exact={exact}>
      {(routeProps) => {
        const combinedClasses = `${baseClasses} ${
          routeProps.match ? activeClass : inActiveClass
        }`;
        return (
          <Link to={to} className={combinedClasses}>
            {children}
          </Link>
        );
      }}
    </Route>
  );
};

export default ToggleLink;
