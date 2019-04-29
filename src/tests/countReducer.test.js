import * as sut from "../state/reducers/countReducer";

test("Testing increment reducer...", () => {
  expect(
    sut.countReducer({ count: 0 }, { type: "count/increment", payload: {} })
  ).toEqual({
    count: 1
  });
});
