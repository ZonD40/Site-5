import React from 'react';
import classes from './Header.module.sass';
import { icons } from './icons';
import callImg from '../../img/header/call-img.png';
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon';

const Header: React.FC = () => {
	console.log(classes)
	return (
		<div className={classes.header}>
			<div className={classes.subheader}>
				<div className={classes.adress}>
					<div className={classes.adress__item}>
						<img src={icons.geopoint} alt="icon" className={classes.adress__img} />
						<div>
							<div className={classes.adress__name}>г. Кокчетав, ул. Ж. Ташенова 129Б</div>
							<div className={classes.adress__descr}>{'(Рынок Восточный)'}</div>
						</div>
					</div>
					<div className={classes.adress__item}>
						<img src={icons.mail} alt="icon" className={classes.adress__img} />
						<div>
							<div className={classes.adress__name}>opt.sultan@mail.ru</div>
							<div className={classes.adress__descr}>На связи в любое время</div>
						</div>
					</div>
				</div>
				<div className={classes.links}>
					<div className={classes.link}>О компании</div>
					<div className={classes.link}>Доставка и оплата</div>
					<div className={classes.link}>Возврат</div>
					<div className={classes.link}>Контакты</div>
				</div>
			</div>
			<hr />
			<div className={classes.mainBlock}>
				<img src={icons.logo} alt="logo" />
				<div className={classes.button}>
					Каталог
					<img src={icons.catalog} alt="catalog" />
				</div>
				<div className={classes.search}>
					<input type="text" placeholder='Поиск...'/>
					<div>
						<img src={icons.search} alt="search" />
					</div>
				</div>
				<div className={classes.call}>
					<div>
						<div className={classes.number}>{'+7 (777) 490-00-91'}</div>
						<div className={classes.time}>время работы: 9:00-20:00</div>
						<div className={classes.orderCall}>Заказать звонок</div>
					</div>
					<div className={classes.callImg}>
						<img src={callImg} alt="call" />
						<div className={classes.point}></div>
					</div>
				</div>
				<div className={classes.button}>
					Прайс-лист
					<img src={icons.download} alt="catalog" />
				</div>
				<ShoppingCartIcon/>
			</div>
			<hr />
		</div>
	); 
};

export default Header;