import "./App.scss";



import { Route, Switch  } from "react-router";

// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
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
