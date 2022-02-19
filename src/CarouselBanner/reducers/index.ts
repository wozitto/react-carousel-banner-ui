import { PREV_EVENT, NEXT_EVENT } from '../actions';

type STORE = { activeIndex: number };
type ACTIONTYPE = { type: 'PREV_EVENT' } | { type: 'NEXT_EVENT' };

const reducer = (state: STORE, action: any) => {
  switch (action.type) {
    case PREV_EVENT:
      return { activeIndex: state.activeIndex - 1 };
    case NEXT_EVENT:
      return { activeIndex: state.activeIndex + 1 };
  }
};

export default reducer;
