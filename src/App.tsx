import { Home } from './pages/home/home'
import './App.css'
import { CharactersPage } from './pages/characters/character-page'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Header } from './components/header/header'
export function App() {
	return (
		<>
			<BrowserRouter>
			<Header />
			<div className='max-w-[1280px]'>

				<Routes>
					<Route path='/' Component={Home} />
					<Route path='/characters' Component={CharactersPage} />
				</Routes>
			</div>
			</BrowserRouter>
		</>
	)
}
