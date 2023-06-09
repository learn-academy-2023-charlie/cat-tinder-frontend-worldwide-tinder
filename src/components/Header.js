import React from "react"
import { Navbar } from "reactstrap" 

function Header() {
  return (
    <>
      <div id="header">
        <Navbar className="my-2" color="info">
          <a href="/">
            <img
              src="https://see.fontimg.com/api/renderfont4/nRnX1/eyJyIjoiZHciLCJoIjoxMzQsInciOjIwMDAsImZzIjo2NywiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYifQ/YW1lcmljYW4/font-arabic-flags.png"
              alt="country flags"
              height="20"
            />
          </a>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
