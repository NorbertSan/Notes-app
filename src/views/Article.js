import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/organisms/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Articles = [
  {
    title: 'hello roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 1,
    articleUrl: 'https://google.com',
  },
  {
    title: 'hello roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 2,
    articleUrl: 'https://google.com',
  },
  {
    title: 'hello roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 3,
    articleUrl: 'https://google.com',
  },
  {
    title: 'hello roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 4,
    articleUrl: 'https://google.com',
  },
];

const Article = () => (
  <>
    <UserPageTemplate>
      <GridTemplate>
        {Articles.map(item => (
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

export default Article;
