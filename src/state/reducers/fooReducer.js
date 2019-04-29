const fooState = {
  baz: "BAZ"
};

const doFoo = state => console.log("FOO STATE", state);

export const fooReducer = (state = fooState, action) => {
  switch (action.type) {
    case "foo/bar":
      return doFoo(state);
    default:
      return state;
  }
};
