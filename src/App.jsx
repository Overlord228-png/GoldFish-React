import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main"
import Catalog from "./pages/catalog/Catalog"

function App() {
  return (
  <Routes>
    <Route path="/" element = { < Main /> }/>
    <Route path="/Catalog" element = { < Catalog /> }/>
  </Routes>
  );
}

export default App;
