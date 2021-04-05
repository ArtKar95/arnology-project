import { createStore, applyMiddleware /*combineReducers */ } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import taskReduser from "./taskReduser";

const middlewaresArr = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewaresArr.push(logger);
}

const middleWares = applyMiddleware(...middlewaresArr);

// const mainReduser = combineReducers({
//   taskReduser,
// });

const store = createStore(taskReduser, middleWares);

export default store;
