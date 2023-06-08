import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const component = screen.getByTestId("header");

    expect(component).toBeInTheDocument;
  });

  it("has attributes assigned to the image", () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )

    const counAlt = screen.getByAltText(/country flags/i);
    expect(counAlt).toHaveAttribute("src", "https://see.fontimg.com/api/renderfont4/nRnX1/eyJyIjoiZHciLCJoIjoxMzQsInciOjIwMDAsImZzIjo2NywiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYifQ/YW1lcmljYW4/font-arabic-flags.png")
    expect(counAlt).toHaveAttribute("alt", "country flags");
    expect(counAlt).toHaveAttribute("height", "20");

  })

});
