import Banner from './Banner'
import Cart from './Cart'
import logo from '../assets/logo.png'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'
import Footer from './Footer'

function App() {
  return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/*<Banner />*/}
			<Cart />
			<ShoppingList />
			<QuestionForm />
			<Footer />
		</div>
	)
}

export default App