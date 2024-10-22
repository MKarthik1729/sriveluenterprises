import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Main from './components/Home/Main'
import Images from './components/Landing/Images'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Bussiness from './components/Bussiness'
// rgb(243, 126, 0) #F37E00 orange
// #1d2228 black
// #e1e2e2 white
// 17 25 33 58
function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<Images />} >
<Route path='' element={<Navbar />} >
<Route path='' element={<Main />}/>
</Route>
  </Route>
  <Route path='/' element={<Navbar />}>
  <Route path='about' element={<About />} />
  <Route path='bussiness' element={<Bussiness />} />
  <Route path='gallery' element={<Gallery />} />
  <Route path='contact' element={<Contact />} />
  </Route>
</Routes>
</BrowserRouter>
  )
}

export default App
