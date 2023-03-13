import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";


const AppBar = () => {
  const totalQuantity = useSelector(state=>{
    return state.incrementItem.totalQuantity
  })
  
  return (
    <>
        <Navbar  expand="lg"  bg="dark">
          <Container>
            <Navbar.Brand href="#" className="text-light">My Shopping Cart APP</Navbar.Brand>
            <Button variant="primary" className="cart-btn m-2">MyCart 
                {/* <Button className="cart-btn-item ms-1">10</Button> */}
                <span className="cart-btn-item ms-1">{totalQuantity}</span>
            </Button>
          </Container>
        </Navbar>
    </>
  );
};

export default AppBar;
