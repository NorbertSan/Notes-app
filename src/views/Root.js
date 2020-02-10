import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Twitter from 'views/Twitter';
import Article from 'views/Article';
import Note from 'views/Note';
import DetailsPage from 'templates/DetailsPage';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Note}>
          <Redirect to="/note" />
        </Route>
        <Route exact path="/note" component={Note} />
        <Route path="/note/:id" component={DetailsPage} />
        <Route exact path="/twitter" component={Twitter} />
        <Route path="/twitter/:id" component={DetailsPage} />
        <Route exact path="/article" component={Article} />
        <Route path="/article/:id" component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
