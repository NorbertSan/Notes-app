import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/organisms/Card/Card';
import { connect } from 'react-redux';

const Twitter = ({ twitter }) => (
  <>
    <UserPageTemplate>
      <GridTemplate>
        {twitter.map(item => (
          <Card
            title={item.title}
            description={item.description}
            twitterName={item.twitterName}
            id={item.id}
            key={item.id}
          />
        ))}
      </GridTemplate>
    </UserPageTemplate>
  </>
);

const mapStateToProps = ({ twitter }) => ({ twitter });

export default connect(mapStateToProps)(Twitter);
