import * as React from "react";

export const ReduxStoreContext = React.createContext();

export const useReduxDispatch = () => {
  const store = React.useContext(ReduxStoreContext);
  return store.dispatch;
};

const forcedReducer = state => !state;

const useForceUpdate = () => React.useReducer(forcedReducer, false)[1];

export const useReduxState = () => {
  const forceUpdate = useForceUpdate();
  const store = React.useContext(ReduxStoreContext);
  const state = React.useRef(store.getState());
  const used = React.useRef({});
  const handler = React.useMemo(
    () => ({
      get: (target, name) => {
        used.current[name] = true;
        return target[name];
      }
    }),
    []
  );

  React.useEffect(() => {
    const callback = () => {
      const nextState = store.getState();
      const changed = Object.keys(used.current).find(
        key => state.current[key] !== nextState[key]
      );
      if (changed) {
        state.current = nextState;
        forceUpdate();
      }
    };
    const unsubscribe = store.subscribe(callback);
    return unsubscribe;
  }, []);
  return new Proxy(state.current, handler);
};

export const StoreProvider = ({ store, children }) => {
  return (
    <ReduxStoreContext.Provider value={store}>
      {children}
    </ReduxStoreContext.Provider>
  );
};
