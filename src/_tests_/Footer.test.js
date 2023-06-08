import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("has nav bar", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it("has a link", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    screen.logTestingPlaygroundURL()
    const footLink = screen.getByRole("link", {
        name: /Production of World Wide Tinder || © R.Richardson - W.Bowen 2023/i
    })

    expect(footLink).toBeInTheDocument()

  });
}); 
