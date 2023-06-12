import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

function CountryEdit({updateCountry, countries}) {
  const {id} = useParams()
  let currentCountry = countries?.find(country => country.id === +id)
  const navigate = useNavigate()
  
  const [editCountry, setEditCountry] = useState({
    name: currentCountry?.name,
    age: currentCountry?.age,
    hobby: currentCountry?.hobby,
    image: currentCountry?.image,
  })

  const handleChange = (e) => {
    setEditCountry({...editCountry, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    updateCountry(editCountry,currentCountry.id)
    navigate(`/countryshow/${currentCountry.id}`)

  }
  
  return (
    <>
      <div id="countryedit" data-testid ='country-edit-card' >
        <Form>
          <FormGroup>
            <Label for="country-name">Please enter name:</Label>
            <Input
              name="name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="country-age">Please enter age:</Label>
            <Input
              name="age"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="country-hobby">Please enter a hobby:</Label>
            <Input
              name="hobby"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="country-image">
              Please upload a picture of your country
            </Label>
            <Input
              name="image"
              type="url"
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

export default CountryEdit;