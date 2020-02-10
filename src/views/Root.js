import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Twitter from 'views/Twitter';
import Article from 'views/Article';
import Note from 'views/Note';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Note}>
          <Redirect to="/note" />
        </Route>
        <Route path="/note" component={Note} />
        <Route path="/twitter" component={Twitter} />
        <Route path="/article" component={Article} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
