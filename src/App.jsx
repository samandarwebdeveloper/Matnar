import "./App.scss";

import AOS from 'aos';
import "aos/dist/aos.css";

import { Route, Switch  } from "react-router";

// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {

  AOS.init();

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
