import { combineReducers } from "redux";
import defaultReducer from "./default-reducer";
import { reducer as formReducer } from "redux-form";

const rootReducers = combineReducers({
  default: defaultReducer,
  form: formReducer
});

export default rootReducers;
