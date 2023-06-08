import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

describe ("<Home />", () => {

    it("renders without crashing", () => {

        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        screen.logTestingPlaygroundURL()
        const homeText = screen.getByRole("heading", {
          name: /Welcome, Countries!/i
        });

        expect(homeText).toBeInTheDocument()

    })

})


