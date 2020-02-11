const initialState = {
  notes: [
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
  ],
  twitters: [
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
      id: 2,
    },
    {
      title: 'hello roman',
      twitterName: 'hello_roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: 3,
    },
    {
      title: 'hello roman',
      twitterName: 'hello_roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: 4,
    },
    {
      title: 'hello roman',
      twitterName: 'hello_roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: 5,
    },
  ],
  articles: [
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
  ],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
