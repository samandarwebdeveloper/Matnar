import "./App.scss";

import AOS from 'aos';
import "aos/dist/aos.css";

import { Route, Switch  } from "react-router";

// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
// import Product from "./Pages/Product/Product";
// import Products from "./Components/Products/Products"

function App() {

  AOS.init();

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
        {/* <Route path="/women"><Product /></Route>
        <Route path="/men"><Product /></Route>
        <Route path="/kids"><Product /></Route>
        <Route path="/brend"><Products/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
