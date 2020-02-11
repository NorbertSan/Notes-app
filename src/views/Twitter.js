import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/organisms/Card/Card';
import { connect } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';

const Twitter = ({ searched }) => (
  <>
    <UserPageTemplate>
      <GridTemplate>
        {searched.length > 0 ? (
          searched.map(item => (
            <Card
              title={item.title}
              description={item.description}
              twitterName={item.twitterName}
              id={item.id}
              key={item.id}
            />
          ))
        ) : (
          <Heading info>No search twitters, add new one</Heading>
        )}
      </GridTemplate>
    </UserPageTemplate>
  </>
);

const mapStateToProps = ({ searched }) => ({ searched });

export default connect(mapStateToProps)(Twitter);
