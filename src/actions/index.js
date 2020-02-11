export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, content) => {
  const getRandomId = () =>
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9);

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType: itemType,
      newItem: {
        ...content,
        id: getRandomId(),
      },
    },
  };
};
