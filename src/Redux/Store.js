import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducers from "./Reducers";

const Store = createStore(Reducers, composeWithDevTools());

export default Store;
