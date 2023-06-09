import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const CountryShow = ({countries}) => {
  const { id } = useParams()
  let currentCountry = countries?.find((country) => {
    return country.id === +id
  })
  return(
    <main className="card" data-testid='countryshow'>
      {currentCountry && (
        <Card
          style={{
            width: '18rem'
          }}
        >
          <CardBody>
            <CardTitle tag="h5">
              {currentCountry.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {currentCountry.age}
            </CardSubtitle>
          </CardBody>
          <img
            alt={`image of ${currentCountry.name} who is a fluffy white cat`}
            src={currentCountry.image}
            width="100%"
          />
          <CardBody>
            <CardText>
              {currentCountry.hobby}
            </CardText>
          </CardBody>
        </Card>
      )}
    </main>
  )
}

export default CountryShow
