import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CardItem from './CartItem/CartItem';
import Checkout from './../CheckoutForm/Checkout/Checkout'
import AddressForm from '../CheckoutForm/AddressForm';
const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart, handleUpdateCartQty, handleRemoveFromCart }) => {

  // console.log(`the cart value is : ${cart}`);
  // const isEmpty =!cart.line_items.length;
  const classes = useStyles();


  //normal fn with some jsx.
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!
      <Link className={classes.link} to="/">start adding some!</Link>
    </Typography>
  );

  if (!cart.line_items) return 'Loading';
  const renderCart = () => (
    <>
      <Grid container spacing={3} >
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CardItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
            {/* <div>{item.name}</div> */}
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant="h4" gutterBottom>
          Subtotal:{cart.subtotal.formatted_with_symbol}

        </Typography>
        <div>
          <Button 
          className={classes.emptyButton} 
          size="large" 
          type="button" 
          variant="contained" 
          color="secondary" onClick={handleEmptyCart}>Empty Card</Button>
          <Button 
          
          className={classes.checkoutButton} 
          component={Link} to="/checkout" element={<Checkout/>}
          size="large" 
          type="button" 
          variant="contained" 
          color="primary">CheckOut</Button>
        </div>

      </div>
    </>
  )
  // if (!cart.line_items) return "Loading...";
  return (

    <Container>
      <div className={classes.toolbar} />

      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}

    </Container>
  )
}

export default Cart;