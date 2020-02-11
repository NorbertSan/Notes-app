import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/organisms/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';

const Note = ({ notes }) => (
  <>
    <UserPageTemplate>
      <GridTemplate>
        {notes.map(item => (
          <Card
            title={item.title}
            description={item.description}
            id={item.id}
            key={item.id}
          />
        ))}
      </GridTemplate>
    </UserPageTemplate>
  </>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Note);
