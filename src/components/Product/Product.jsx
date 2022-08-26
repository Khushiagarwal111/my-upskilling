import React from 'react';
import useStyles from './styles';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';



const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  // console.log(product);
  //   return <div>text</div>
  // }


  const handleAddToCart = () => onAddToCart(product.id, 1);
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>

        <Typography dangerouslySetInnerHTML={{ __html: product.description }}mvariant="body2"  color="textSecondary" component="p" />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart className='cart'/>
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;