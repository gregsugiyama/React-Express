import * as R from "ramda";

const iMap = (mapFn, list) => R.addIndex(R.map)(mapFn, list);

export { iMap };
