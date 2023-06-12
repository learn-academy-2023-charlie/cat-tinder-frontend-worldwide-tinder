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
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  // const createCountry = (createdCountry) => {
  //   console.log("my created country:", createdCountry);
  // };

  const updateCountry = (country, id) => {
    console.log(country);
    console.log(id);
  };

  useEffect(() => {
    readCountry();
  }, [])

  const readCountry = () => {
    fetch("http://localhost:3000/countries")
      .then((response) => response.json())
      .then((payload) => {
        setCountries(payload);
      })
      .catch((error) => console.log(error));
  }

  const createCountry = (createdCountry) => {
    fetch("http://localhost:3000/countries", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(createdCountry),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readCountry())
      .catch((errors) => console.log("Country create errors:", errors));
  }



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/countryedit/:id"
          element={
            <CountryEdit countries={countries} updateCountry={updateCountry} />
          }
        />
        <Route
          path="/countryindex"
          element={<CountryIndex countries={countries} />}
        />
        <Route
          path="/countrynew"
          element={<CountryNew createCountry={createCountry} />}
        />
        <Route
          path="/countryshow/:id"
          element={<CountryShow countries={countries} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
