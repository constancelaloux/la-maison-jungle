import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css';

function ShoppingList() {
	const getCategories = plantList.reduce(
		(total, value) => 
			total.includes(value.category) ? total : total.concat(value.category),
		[]
	)
	return (
		<div>
			<ul>
				{getCategories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id}  className='lmj-plant-item'>
						{plant.name}
						{plant.isSpecialOffer && <div className = 'lmj-sales'>Soldes</div>}
					</li>
				))}
			</ul>
		</div>
	)
}
export default ShoppingList