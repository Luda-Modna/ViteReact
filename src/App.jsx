import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {
  useHistory,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import Counter from "./components/Counter";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}
function About() {
  return <div>About</div>;
}
function Contacts() {
  return <div>Contacts</div>;
}
function Components() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`${url}/stopwatch`}>StopWatch</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/counter`}>
          <Counter />
        </Route>
        <Route path={`${path}/stopwatch`}>
          <StopWatch />
        </Route>
        <Route path={`${path}/*`}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

function NotFound() {
  const histoty = useHistory();

  useEffect(() => {
    setTimeout(() => histoty.push("/"), 5000);
  });

  return <div>404 not found</div>;
}
