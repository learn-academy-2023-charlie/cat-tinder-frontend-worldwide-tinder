import React from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

function CountryIndex({countries}) {
  return (<>
    <div id="country-index-card">
      {countries?.map((value, index) => {
        return(
          <Card
            style={{
              width: '18rem'
            }}
            key={index}
          >
            <img
              alt={`image of ${value.name} the country's flag`}
              src={value.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                {value.name}
              </CardTitle>
              <Button>
                <NavLink to={`/countryshow/${value.id}`}>
                  Click to View Meow
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </div>
  </>
  );
}

export default CountryIndex;
