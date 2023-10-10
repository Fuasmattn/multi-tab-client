import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { First } from "./pages/First/index.jsx";
import { Second } from "./pages/Second/index.jsx";
import registerServiceWorker from "../registerServiceWorker.js";
import { color, initStore } from "./store.js";

registerServiceWorker();
initStore();

export function App() {
  const isDark = color.value === "dark";
  const style = {
    background: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  };
  return (
    <LocationProvider>
      <Header />
      <main style={style}>
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
