import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/incrementItem/incrementItemSlice";

import data from "../data";



const ProductCard = () => {
  const dispatch = useDispatch();

  return (
    <>
      {data.map((item) => {
        
        return (
          <Card key={item.id} className="my-2">
            <Card.Body>
              <Card.Title className="text-start">
                {item.title}
                <span className="price-tag">${item.price}</span>
              </Card.Title>

              <Card.Subtitle className="mb-2 pt-3 text-muted text-start">
                {item.description}
              </Card.Subtitle>

              <Button
                onClick={() => dispatch(addToCart({
                  ID:item.id,
                  TITLE:item.title,
                  PRICE:item.price,
                  QUANTITY:1,
                  BASEPRICE:item.baseprice
                }))}
                className="addToCart-btn"
              >
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default ProductCard;
