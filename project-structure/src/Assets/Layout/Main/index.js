import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Front from '../../../Pages/Front/index';
import Home from '../../../Pages/Home/index';
import Users from '../../../Pages/Users/index';

const index = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Front} />
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </main>
  );
};

export default index;
