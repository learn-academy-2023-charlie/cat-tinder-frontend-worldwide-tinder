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
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countryedit" element={<CountryEdit countries={countries} />} />
        <Route path="/countryindex" element={<CountryIndex countries={countries} />} />
        <Route path="/countrynew" element={<CountryNew countries={countries} />} />
        <Route path="/countryshow/:id" element={<CountryShow countries={countries} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <h1>Rashaan and Will's World Wide Tinder App</h1>
      <Footer />
    </>
  );
}

export default App;
