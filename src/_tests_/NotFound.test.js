import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });

  it("has an img", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();
    const notImg = screen.getByRole("img", {
      name: /Not Found Flag/i,
    });

    expect(notImg).toBeInTheDocument();
  });

  it("has image with attributes", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    screen.logTestingPlaygroundURL();
    const imgAttr = screen.getByAltText(/Not Found Flag/i);
    expect(imgAttr).toHaveAttribute(
      "src",
      "https://i5.walmartimages.com/asr/f9d414c9-521f-41c2-83db-f186fe9c51c1.30cee480e83eece3f421a5e1906115cb.png"
    );
    expect(imgAttr).toHaveAttribute("alt", "Not Found Flag");
    expect(imgAttr).toHaveAttribute("height", "1000");
  });
});
