import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/organisms/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';

const Note = ({ searched }) => (
  <UserPageTemplate>
    <GridTemplate>
      {searched.map(item => (
        <Card
          title={item.title}
          description={item.description}
          id={item.id}
          key={item.id}
        />
      ))}
    </GridTemplate>
  </UserPageTemplate>
);

const mapPropsToState = ({ searched }) => ({ searched });

export default connect(mapPropsToState)(Note);
