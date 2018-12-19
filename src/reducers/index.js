import { combineReducers } from "redux";
// calling the default reducer to create a link
import defaultReducer from "./default-reducer";
import { reducer as formReducer } from "redux-form";

const rootReducers = combineReducers({
  // add reducer files references here
  default: defaultReducer,
  form: formReducer
});

export default rootReducers;
