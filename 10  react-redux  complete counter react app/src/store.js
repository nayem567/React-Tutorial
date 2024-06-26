

// 4. Store

import { createStore } from "redux";
import counterReducer from "./services/reducer/counterReducer";

export const store = createStore(counterReducer);