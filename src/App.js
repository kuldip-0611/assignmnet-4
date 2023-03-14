import { Container } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import AddtoCardCart from "./components/AddtoCardCart";
import AppBar from "./components/AppBar";
import ProductCard from "./components/ProductCard";
import ShoppingCartComponent from "./components/ShoppingCartComponent";
import data from "./data";

function App() {
  const [show,setShow] = useState(false);
  return (
    <div className="App">
      <AppBar show={show} setShow={setShow} />

      <Container>
      {show   &&   <ShoppingCartComponent /> }
        <hr/>
        <ProductCard />
      </Container>
    </div>
  );
}

export default App;
