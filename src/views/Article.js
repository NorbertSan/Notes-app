import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/organisms/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';

const Article = ({ searched }) => (
  <>
    <UserPageTemplate>
      <GridTemplate>
        {searched.map(item => (
          <Card
            title={item.title}
            description={item.description}
            articleUrl={item.articleUrl}
            id={item.id}
            key={item.id}
          />
        ))}
      </GridTemplate>
    </UserPageTemplate>
  </>
);

const mapStateToProps = ({ searched }) => ({ searched });

export default connect(mapStateToProps)(Article);
