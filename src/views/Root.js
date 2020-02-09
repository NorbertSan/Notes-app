import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Twitter from 'views/Twitter';
import Article from 'views/Article';
import Note from 'views/Note';
import MainTemplate from 'templates/MainTemplate';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Note} />
        <Route path="/twitter" component={Twitter} />
        <Route path="/article" component={Article} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
