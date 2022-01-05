import "./App.scss";

import AOS from 'aos';
import "aos/dist/aos.css";

import { Route, Switch  } from "react-router";

// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Pages/Product/Product";
import Product from "./Components/ItemCom/ItemCom";

function App() {

  AOS.init();

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
        {/* <Route path="/women"><Products /></Route>
        <Route path="/men"><Products /></Route>
        <Route path="/kids"><Products /></Route>
        <Route path="/product"><Product/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
