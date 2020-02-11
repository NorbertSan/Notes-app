import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/organisms/Card/Card';
import { connect } from 'react-redux';

const Twitter = ({ searched }) => (
  <>
    <UserPageTemplate>
      <GridTemplate>
        {searched.map(item => (
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

const mapStateToProps = ({ searched }) => ({ searched });

export default connect(mapStateToProps)(Twitter);
