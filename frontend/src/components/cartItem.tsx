import React, { FunctionComponent } from "react";
import { Product } from "../models/product";
import { Grid, makeStyles } from "@material-ui/core";

interface CartItemProps {
  product: Product;
  quantity: Number;
}

const useStyles = makeStyles(theme => ({
  productImage: {
    width: "100%",
    height: "100%"
  },
  infoList: {
    listStyle: "none"
  }
}));

export const CartItemComponent: FunctionComponent<CartItemProps> = props => {
  const classes = useStyles();

  const { product, quantity } = props;
  return (
    <Grid container item direction="row" justify="space-around">
      <Grid item xs={3}>
        <img
          src={"https://" + product.image.toString()}
          className={classes.productImage}
        />
      </Grid>
      <Grid container item alignContent="center" justify="flex-start" xs={4}>
        <ul className={classes.infoList}>
          <li>
            <b>{product.brand}</b>
          </li>
          <li>{product.description}</li>
          <li>Cantidad: {quantity}</li>
        </ul>
      </Grid>
      <Grid container item alignContent="center" justify="flex-end" xs={3}>
        <b>${product.price}</b>
      </Grid>
    </Grid>
  );
};
