const initialState = {
  searched: [],
  note: [
    {
      title: 'hello dev ed',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '1',
    },
    {
      title: 'hello roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '2',
    },
    {
      title: 'hello roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '3',
    },
    {
      title: 'hello roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '4',
    },
  ],
  twitter: [
    {
      title: 'hello roman',
      twitterName: 'hello_roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '1',
    },
    {
      title: 'hello roman',
      twitterName: 'hello_roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '2',
    },
    {
      title: 'hello roman',
      twitterName: 'hello_roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '3',
    },
    {
      title: 'hello roman',
      twitterName: 'hello_roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '4',
    },
    {
      title: 'hello roman',
      twitterName: 'hello_roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '5',
    },
  ],
  article: [
    {
      title: 'hello roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '1',
      articleUrl: 'https://google.com',
    },
    {
      title: 'hello roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '2',
      articleUrl: 'https://google.com',
    },
    {
      title: 'hello roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '3',
      articleUrl: 'https://google.com',
    },
    {
      title: 'hello roman',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi iste quaerat laudantium, natus mollitia cum repellendus esse? Vitae quisquam optio placeat reiciendis, atque aliquam perspiciatis! Praesentium minima nesciunt hic.',
      id: '4',
      articleUrl: 'https://google.com',
    },
  ],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      console.log(action);
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            item => item.id !== action.payload.id,
          ),
        ],
      };

    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.newItem,
        ],
      };

    case 'SEARCH_ITEMS': {
      const { value, itemType } = action.payload;
      const items = state[itemType].filter(item => item.title.includes(value));
      return { ...state, searched: items };
    }

    case 'EDIT_ITEM': {
      const { content, id, itemType } = action.payload;
      return {
        ...state,
        [itemType]: [
          ...state[itemType].map(item =>
            item.id === id
              ? {
                  ...item,
                  title: content.title,
                  description: content.description,
                  articleUrl: content.articleUrl,
                  twitterName: content.twitterName,
                }
              : item,
          ),
        ],
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
