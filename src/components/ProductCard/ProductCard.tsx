import React from 'react';
import classes from './ProductCard.module.sass';
import { icons } from './icons';
import { ProductCardProps } from '../../types/product';



const ProductCard: React.FC<ProductCardProps> = (props) => {
	const { brand, id, manufacturer, name, pictureURL, price, size, sizeType } = props.product;

	return (
		<div id={String(id)} className={classes.card}>
			<div className={classes.img}>
				<img src={pictureURL} alt="productImg" />
			</div>
			{
				sizeType === "weight" ?
				<div className={classes.size}>
					<img src={icons.weight} alt="sizeType" />
					{size} г
				</div> 
				:
				<div className={classes.size}>
					<img src={icons.volume} alt="sizeType" />
					{size} мл
				</div>
			}
			<div className={classes.name}>
				<span>{brand} </span> {name}
			</div>
			<div className={classes.data}>
				<span>Штрихкод: </span> {id}
			</div>
			<div className={classes.data}>
				<span>Производитель: </span> {manufacturer}
			</div>
			<div className={[classes.data, classes.data_last].join(' ')}>
				<span>Бренд: </span> {brand}
			</div>
			<div className={classes.priceWrapper}>
				<div className={classes.price}>{price} ₸</div>
				<div className={classes.button}>
					В КОРЗИНУ 
					<img src={icons.shoppingCart} alt="shoppingCart" />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;