import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/organisms/Card/Card';

const Twitters = [
  {
    title: 'hello roman',
    twitterName: 'hello_roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 1,
  },
  {
    title: 'hello roman',
    twitterName: 'hello_roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 1,
  },
  {
    title: 'hello roman',
    twitterName: 'hello_roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 1,
  },
  {
    title: 'hello roman',
    twitterName: 'hello_roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 1,
  },
  {
    title: 'hello roman',
    twitterName: 'hello_roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 1,
  },
];

const Twitter = () => (
  <>
    <UserPageTemplate>
      <GridTemplate>
        {Twitters.map(item => (
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

export default Twitter;
