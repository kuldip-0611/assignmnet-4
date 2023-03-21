import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalQuantity: 0,
  data: [],

};

const incrementItemSlice = createSlice({
  name: "incrementItem",
  initialState,
  reducers: {
    /* A reducer that is used to increment the quantity of the item in the cart. */
    incrementItem: (state, action) => {
      state.data.map((item, index) => {
        if (action.payload.ID === item.ID) {
          state.data[index].QUANTITY !== 0 && state.data[index].QUANTITY++;
          state.totalQuantity !==0 && state.totalQuantity++;

          state.data[index].PRICE += action.payload.BASEPRICE;
        } else {
          return state.data[index].QUANTITY;
        }
        return item
      });
    },
    /* A reducer that is used to decrement the quantity of the item in the cart. */
    decrementItem: (state, action) => {
      state.data.map((item, index) => {
        console.log(action.payload.ID);

        if (action.payload.ID === item.ID) {


          state.data[index].QUANTITY !== 0 && state.data[index].QUANTITY--;
          state.totalQuantity--;
          state.data[index].PRICE !== 0 && (state.data[index].PRICE -= action.payload.BASEPRICE);
          if (state.data[index].QUANTITY === 0) {
            state.data.splice(index, 1)
          }

        } else {
          return state.data[index].QUANTITY;
        }
        return item
      });
    },

   /* This is a reducer that is used to add an item to the cart. */
    addToCart: (state, action) => {
      if (state.data.length === 0) {
        state.data.push(action.payload);
        state.totalQuantity++;
      } else {
        state.data.map((item, index) => {
          if (state.data.length === 1) {
            if (item.ID === action.payload.ID) {
              state.data[0].QUANTITY++;
              state.totalQuantity++;
              state.data[index].PRICE += action.payload.BASEPRICE;
            } else {
              state.data.push(action.payload);
              state.totalQuantity++;
            }
          } else {
            if (action.payload.ID === item.ID) {
              state.data[index].QUANTITY++;
              state.totalQuantity++;
              (state.data[index].PRICE += action.payload.BASEPRICE);
            }
          }
          return item;
        });
      }
    },

  },
});

export default incrementItemSlice.reducer;
export const { incrementItem, decrementItem, addToCart } =
  incrementItemSlice.actions;
