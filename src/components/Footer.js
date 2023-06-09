import React from "react"
import { Navbar,NavbarBrand } from "reactstrap";
function Footer() {
  return (
    <>
      <div id="footer">
        <Navbar className="my-2" color="info" fixed="bottom">
          <NavbarBrand href="/">
            &copy; Production of World Wide Tinder || © R.Richardson - W.Bowen
            2023
          </NavbarBrand>
        </Navbar>
      </div>
    </>
  );
}

export default Footer;
