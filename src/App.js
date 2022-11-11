import React from 'react'
import NavBar from './component/NavBar'
import Content from './component/Content'
import About from './component/About'
import Footer from './component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './component/Error404'
import Home from './component/Home'
const App = () => {


  return (
	<div>
	  <NavBar />
	    <BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/content' element={<Content />} />
				<Route path='/about' element={<About />}/>
				<Route path='/footer' element={<Footer />}/>
				<Route path='*' element={<Error404 />}/>
			</Routes>
		</BrowserRouter>
	</div>
	)
	}
export default App
