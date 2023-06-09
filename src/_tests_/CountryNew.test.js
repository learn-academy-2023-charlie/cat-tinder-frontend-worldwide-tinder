import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CountryNew from '../pages/CountryNew'

describe('<CountryNew />', () => {
    
    beforeEach(() => {
        render(
            <BrowserRouter>
                <CountryNew />
            </BrowserRouter>
        )
    })

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CountryNew />
      </BrowserRouter>
    );

    const container = document.querySelector('#app');

    expect(container).toBeInTheDocument;
  });

})