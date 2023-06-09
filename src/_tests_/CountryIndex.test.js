import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryIndex from "../pages/CountryIndex";
import  mockCountries  from "../mockCountries";

describe("<CountryIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CountryIndex />
      </BrowserRouter>
    );

    const component = document.querySelector("#country-index-card");

    expect(component).toBeInTheDocument;
  });

  it("has attributes assigned to the image", () => {
    render(
        <BrowserRouter>
            <CountryIndex countries={mockCountries}/>
        </BrowserRouter>
    )
    mockCountries.forEach(country => {
        const altText = screen.getAllByAltText(/image of/i)
        screen.debug(altText[0])
        expect(altText[0]).toBeInTheDocument()
});

  })

});
