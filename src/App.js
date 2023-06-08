import CountryEdit from './pages/CountryEdit'
import CountryIndex from './pages/CountryIndex'
import CountryNew from './pages/CountryNew'
import CountryShow from './pages/CountryShow'
import Footer from './componets/Footer'
import Header from './componets/Header'
import Home from './pages/Home'
import mockCountries from './mockCountries'
import NotFound from './pages/NotFound'
import {Routes,Route} from "react-router-dom"
import React, {useState} from "react"
import "./App.css"

function App() {
  const [countries,setCountries] = useState(mockCountries)
  return (<>
  <Header/>
  <Routes> <Route path='/' element = {<Home/>}/> 
  <Route path='/countryedit' element = {<CountryEdit/>}/> 
  <Route path='/countryindex' element = {<CountryIndex/>}/> 
  <Route path='/countrynew' element = {<CountryNew/>}/> 
  <Route path='/countryshow' element = {<CountryShow/>}/> 
  <Route path='/*' element = {<NotFound/>}/> 

  </Routes>
  

    <h1>Rashaan and Will's World Wide Tinder App</h1>
  <Footer/>
  </>
  );
}

export default App;
