import * as sut from "../utils/helpers";

test("iMap(fn, coll) => fn(coll-1, index), fn(coll-2, index), fn(coll-3, index)...", () => {
  expect(
    sut.iMap((x, index) => `collection item ${index} : ${x}`, [
      "first",
      "second",
      "third"
    ])
  ).toEqual([
    "collection item 0 : first",
    "collection item 1 : second",
    "collection item 2 : third"
  ]);
});
