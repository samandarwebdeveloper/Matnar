import "./App.scss";



import { Route, Switch  } from "react-router";

// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./pages/Product/Product";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
        
        <Route path="/vomen"><Product /></Route>

        <Route path="/men"><Product /></Route>

        <Route path="/kids"><Product /></Route>
        
      </Switch>
    </div>
  );
}

export default App;
