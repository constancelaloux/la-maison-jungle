import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(total, plant) =>
			total.includes(plant.category) ? total : total.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, isBestSale, isSpecialOffer }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						isBestSale={isBestSale}
						isSpecialOffer={isSpecialOffer}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList