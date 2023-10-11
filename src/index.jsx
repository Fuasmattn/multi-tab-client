// @ts-nocheck
import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { First } from "./pages/First/index.jsx";
import { Second } from "./pages/Second/index.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";

// registerServiceWorker();

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocationProvider>
          <Header />
          <Router>
            <Route path="/" component={First} />
            <Route path="/second" component={Second} />
            <Route default component={NotFound} />
          </Router>
        </LocationProvider>
      </PersistGate>
    </Provider>
  );
}

render(<App />, document.getElementById("app"));
