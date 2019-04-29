const countState = {
  count: 0
};

const incrementState = state => ({
  ...state,
  count: state.count + 1
});

const decrementState = state => ({
  ...state,
  count: state.count - 1
});

export const countReducer = (state = countState, action) => {
  switch (action.type) {
    case "count/inc":
      return incrementState(state);
    case "count/dec":
      return decrementState(state);
    default:
      return state;
  }
};
