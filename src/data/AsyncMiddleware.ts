const isPromise = (payload: any) =>
  (typeof (payload) === "object" || typeof (payload) === "function")
  && typeof (payload.then) === "function";


export const asyncActions = () => (next: Function) => (action: any) => {
  if (isPromise(action.payload)) {
    action.payload.then((result: any) => next({ ...action, payload: result }));
  } else {
    next(action)
  }
}
