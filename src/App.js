import CountryEdit from "./pages/CountryEdit";
import CountryIndex from "./pages/CountryIndex";
import CountryNew from "./pages/CountryNew";
import CountryShow from "./pages/CountryShow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import mockCountries from "./mockCountries";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

function App() {

  const [countries, setCountries] = useState(mockCountries);
  
  const createCountry = (createdCountry) => {
      console.log("my created country:", createdCountry);
  }
  const updateCountry = (country,id) => {
    console.log(country);
    console.log(id)
  }
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countryedit/:id" element={<CountryEdit countries={countries} updateCountry={updateCountry} />} />
        <Route path="/countryindex" element={<CountryIndex countries={countries} />} />
        <Route path="/countrynew" element={<CountryNew createCountry={createCountry} />} />
        <Route path="/countryshow/:id" element={<CountryShow countries={countries} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes> 
      <Footer />
    </>
  );
}

export default App;
