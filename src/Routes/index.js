import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../Views/MainPage';
import HistoryPage from '../Views/HistoryPage';


const renderRoutes = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/history" component={HistoryPage} />
    <Redirect to="/" />
  </Switch>
)

export default renderRoutes;