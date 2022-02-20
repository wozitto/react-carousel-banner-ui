type STORE = { activeIndex: number };
type ACTION = { type: 'SET_INDEX'; newIndex: number };

const reducer = (state: STORE, action: ACTION) => {
  switch (action.type) {
    case 'SET_INDEX':
      return { activeIndex: action.newIndex };
  }
};

export default reducer;
