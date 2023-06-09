import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryNew from "../pages/CountryNew";

describe("<CountryNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CountryNew />
      </BrowserRouter>
    );
  });

  it("renders country-name field", () => {
    const element = screen.getByLabelText(/name/i);

    expect(element).toBeInTheDocument();
  });
});
