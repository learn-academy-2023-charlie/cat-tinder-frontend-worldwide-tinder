import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

function CountryNew({createCountry}) {

  const navigate = useNavigate()
  
  const [newCountry, setNewCountry] = useState({
    name: "",
    age: "",
    hobby: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewCountry({...newCountry, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    createCountry(newCountry)
    navigate("/countryindex")
  }
  
  return (
    <>
      <div id="countrynew">
        <Form>
          <FormGroup>
            <Label for="country-name">Please enter name:</Label>
            <Input
              id="country-name"
              name="name"
              placeholder="America"
              type="text"
              onChange={handleChange}
              value={newCountry.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="country-age">Please enter age:</Label>
            <Input
              id="country-age"
              name="age"
              placeholder="1776"
              type="text"
              onChange={handleChange}
              value={newCountry.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="country-hobby">Please enter a hobby:</Label>
            <Input
              id="country-hobby"
              name="hobby"
              placeholder="kicking butts and taking names!"
              type="text"
              onChange={handleChange}
              value={newCountry.hobby}
            />
          </FormGroup>
          <FormGroup>
            <Label for="country-image">
              Please upload a picture of your country
            </Label>
            <Input
              id="country-image"
              name="image"
              placeholder="Please attach a URL here"
              type="url"
              onChange={handleChange}
              value={newCountry.image}
            />
          </FormGroup>
          <Button onClick={handleClick} name="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CountryNew;
