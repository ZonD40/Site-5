import React from 'react';
import classes from './Filters.module.sass';
import MySearch from '../UI/MySearch/MySearch';
import deleteIcon from '../../icon/filters/delete.svg';

const Filters: React.FC = () => {
	return (
		<div className={classes.filters}>
			<div className={classes.filtersTitle}>ПОДБОР ПО ПАРАМЕТРАМ</div>
			<div className={classes.price}>
				<div>Цена <span>₸</span></div>
				<div className={classes.pricePicker}>
					<input type="number" placeholder='1' name="min" />
					-
					<input type="number" placeholder='10000' name="max" />
				</div>
			</div>
			<div className={classes.manufacturer}>
				<div className={classes.manufacturerTitle}>Производитель</div>
				<div className={classes.manufacturerSearch}>
					<MySearch/>
				</div>
				<ul className={classes.manufacturerList}>
					<li>
						<input type="checkbox" />
						Grifon <span>{'(56)'}</span>
					</li>
					<li>
						<input type="checkbox" />
						Grifon <span>{'(56)'}</span>
					</li>
					<li>
						<input type="checkbox" />
						Grifon <span>{'(56)'}</span>
					</li>
				</ul>
				<div className={classes.manufacturerShowAll}>
					Показать все <span> &#9660;</span>
				</div>
			</div>
			<hr />
			<div className={classes.buttons}>
				<div className={classes.buttonShow}>Показать</div>
				<div className={classes.buttonDelete}>
					<img src={deleteIcon} alt="delete" />
				</div>
			</div>
			<ul className={classes.careTypeList}>
				<li>Уход за телом</li>
				<li>Уход за волосами</li>
				<li>Уход за лицом</li>
				<li>Уход за ногтями</li>
				<li>Уход за кожей рук</li>
			</ul>
		</div>
	);
};

export default Filters;