import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { First } from "./pages/First/index.jsx";
import { Second } from "./pages/Second/index.jsx";
import registerServiceWorker from "../registerServiceWorker.js";

registerServiceWorker();

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={First} />
          <Route path="/second" component={Second} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
