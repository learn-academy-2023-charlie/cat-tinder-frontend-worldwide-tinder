import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const component = screen.getByTestId('footer')

    expect(component).toBeInTheDocument

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
