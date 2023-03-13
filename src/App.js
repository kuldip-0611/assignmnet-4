import { Container } from "react-bootstrap";
import "./App.css";
import AddtoCardCart from "./components/AddtoCardCart";
import AppBar from "./components/AppBar";
import ProductCard from "./components/ProductCard";
import ShoppingCartComponent from "./components/ShoppingCartComponent";
import data from "./data";

function App() {
  return (
    <div className="App">
      <AppBar />

      <Container>
        <ShoppingCartComponent />
        <hr/>
        <ProductCard />
      </Container>
    </div>
  );
}

export default App;
