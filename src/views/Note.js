import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/organisms/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = [
  {
    title: 'hello roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 1,
  },
  {
    title: 'hello roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 2,
  },
  {
    title: 'hello roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 3,
  },
  {
    title: 'hello roman',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
    id: 4,
  },
];

const Note = () => (
  <>
    <UserPageTemplate>
      <GridTemplate>
        {Notes.map(item => (
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

export default Note;
