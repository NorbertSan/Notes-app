import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/organisms/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';

const Note = ({ searched }) => (
  <UserPageTemplate>
    <GridTemplate>
      {searched.length > 0 ? (
        searched.map(item => (
          <Card
            title={item.title}
            description={item.description}
            id={item.id}
            key={item.id}
          />
        ))
      ) : (
        <Heading info>No search notes,add new one</Heading>
      )}
    </GridTemplate>
  </UserPageTemplate>
);

const mapPropsToState = ({ searched }) => ({ searched });

export default connect(mapPropsToState)(Note);
