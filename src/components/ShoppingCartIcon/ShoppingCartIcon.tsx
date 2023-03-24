import React from 'react';
import classes from './ShoppingCartIcon.module.sass';
import shoppingCart from '../../icon/header/shopping-cart.svg';

const ShoppingCartIcon: React.FC = () => {
	return (
		<div className={classes.shoppingCart}>
			<img src={shoppingCart} alt="icon" />
			<div className={classes.productCounter}>3</div>
			<div>
				Корзина
				<div className={classes.price}>12 478 ₸ </div>
			</div>
		</div>
	);
};

export default ShoppingCartIcon;