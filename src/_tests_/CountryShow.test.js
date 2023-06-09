import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryShow from "../pages/CountryShow";
import  mockCountries  from "../mockCountries";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("<CountryShow />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CountryShow />
      </BrowserRouter>
    );

    const component = screen.getByTestId("countryshow");

    expect(component).toBeInTheDocument;
  });

  it("renders a name", () => {
    render(
        <MemoryRouter initialEntries={['/countryshow/1']}>
            <Routes><Route path="/countryshow/:id" element={<CountryShow countries={mockCountries}/>}/></Routes>
        </MemoryRouter>
    )
        screen.logTestingPlaygroundURL()
        const countryName=screen.getByRole('heading',{name:/America/i})
});

  })


