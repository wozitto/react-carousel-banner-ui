type STORE = { activeIndex: number };
type ACTIONTYPE = { type: 'SET_INDEX'; newIndex: number };

const reducer = (state: STORE, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_INDEX':
      return { activeIndex: action.newIndex };
  }
};

export default reducer;
