import '../styles/Banner.css'

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner
/*function Banner() {
    const title = 'la maison jungle'
    return <div className='lmj-banner'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
}*/
