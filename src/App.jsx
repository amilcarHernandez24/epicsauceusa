import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import CallToAction from './Components/CallToAction'
import Products from './Components/Products'
import About from './Components/About'
import ChooseUs from './Components/ChooseUs'
import Testimonials from './Components/Testimonials'
import MakeOrder from './Components/MakeOrder'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <CallToAction />
      <Products />
      <About />
      <ChooseUs />
      <Testimonials />
      <MakeOrder />
    </div>
  )
}

export default App
