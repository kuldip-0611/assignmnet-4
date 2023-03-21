import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
} from "../features/incrementItem/incrementItemSlice";

const AddtoCardCart = ({ item }) => {
  const disptch = useDispatch();

  const cards = useSelector((state) => {
    return state.incrementItem.data;
  });

  /**
   * It takes in an ID and a BASEPRICE, and then dispatches an action to increment the item with that
   * ID by one
   * @param ID - The ID of the item you want to increment
   * @param BASEPRICE - The price of the item
   */
  const handleIncrement = (ID, BASEPRICE) => {
    disptch(
      incrementItem(ID, BASEPRICE)
    );

  }
  /**
   * It takes in an ID and a BASEPRICE, and then dispatches the decrementItem action with the ID and
   * BASEPRICE as arguments
   * @param ID - The ID of the item
   * @param BASEPRICE - The price of the item before any discounts are applied.
   */
  const handleDecrement = (ID, BASEPRICE) => {
    disptch(decrementItem(ID, BASEPRICE))

  }


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
                handleIncrement({ ID: item.ID, BASEPRICE: item.BASEPRICE })
              }}
              className="addToCart-btn text-light border border-light ms-2"
            >
              +
            </Button>
            <Button
              onClick={() => {
                handleDecrement({ ID: item.ID, BASEPRICE: item.BASEPRICE })
              }}
              className="addToCart-btn text-light border border-light"
            >
              -
            </Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  );
};

export default AddtoCardCart;
