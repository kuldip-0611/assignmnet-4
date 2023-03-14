import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
} from "../features/incrementItem/incrementItemSlice";

const AddtoCardCart = ({show}) => {
  const disptch = useDispatch();

  const cards = useSelector((state) => {
    return state.incrementItem.data;
  });
  

  return (
    <div>
     
     {cards.map((item) => (
        <Card key={item.ID} className="bg-dark my-2">
          <Card.Body>
            <Card.Title className="text-start text-light">
              {item.TITLE}
              <span className="price-tag">${item.PRICE}</span>
            </Card.Title>

            <Card.Subtitle className="mb-2 text-light pt-3 text-muted text-start">
              X {item.QUANTITY}
            </Card.Subtitle>

            <Button
              onClick={() => {
                disptch(
                  incrementItem({ ID: item.ID, BASEPRICE: item.BASEPRICE })
                );
              }}
              className="addToCart-btn text-light border border-light ms-2"
            >
              +
            </Button>
            <Button
              onClick={() => {
                disptch(
                  decrementItem({ ID: item.ID, BASEPRICE: item.BASEPRICE })
                );
              }}
              className="addToCart-btn text-light border border-light"
            >
              -
            </Button>
          </Card.Body>
        </Card>
      )) }
     
    </div>
  );
};

export default AddtoCardCart;
