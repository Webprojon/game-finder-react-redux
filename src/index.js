import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./Components/App";
// Setting Up Redux
import { createStore, applyMiddleware, compose } from "redux";
// Provider
import { Provider } from "react-redux";
// Import Root Reducer
import rootReducers from "./redux/reducers";
// Import Redux Thunk
import thunk from "redux-thunk";

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  componseEnhancer(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
