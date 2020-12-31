import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout({ children }) {
	return (
		<div classname='bg-gray-300'>
			<Head />
			<Nav />
			{children}
			<Footer />
		</div>
	)
}