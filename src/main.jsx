import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { documentsReducer } from "./reducers/documents";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { defaultDocuments, logger } from "./middlewares";
import "./index.css";

const composedEnhacers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger,defaultDocuments)
);

const store = createStore(documentsReducer, composedEnhacers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
