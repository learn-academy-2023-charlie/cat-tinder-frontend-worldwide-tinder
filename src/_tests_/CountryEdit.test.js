import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryEdit from "../pages/CountryEdit";

describe("<CountryEdit />", () => {
    beforeEach(() => {
    render(
        <BrowserRouter>
        <CountryEdit />
        </BrowserRouter>
    );
});

  it("renders country-name field", () => {
    const element = screen.getByLabelText(/name/i);

    expect(element).toBeInTheDocument();
  });
});



