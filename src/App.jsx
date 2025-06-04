import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from "./components/Layout"
import About from './pages/About'
import Internship from './pages/Internship'
import Projects from './pages/Projects'
import PersonalDetails from './pages/PersonalDetails'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}  />
          <Route path="/about" element={<About />} />
          <Route path="/internship" element={<Internship/>}/>
          <Route path="/project" element = {<Projects />} />
          <Route path="/personal details" element={<PersonalDetails />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App