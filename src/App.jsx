import "./Assets/scss/normalize.scss";
import "./App.scss";


import { BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    </>
  );
}

export default App;
