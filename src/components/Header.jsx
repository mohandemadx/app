// src/components/Header.jsx
import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBInputGroup,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        {/* Flex container for both left and right aligned content */}
        <div className="d-flex justify-content-between w-100">
          {/* Logo and Name on the Left */}
          <MDBNavbarBrand href="/" className="d-flex align-items-center">
            <img
              src='/assets/logo.png'
              alt="Logo"
              height="40"
              className="me-2"
            />
            <strong>ZAK Store</strong>
          </MDBNavbarBrand>

          {/* Right Side Navigation (Tabs, Search and Cart) */}
          <MDBNavbarNav className="d-flex align-items-center ms-auto">
            {/* Tabs */}
            <MDBNavbarItem>
              <MDBNavbarLink href="/home">Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/product">Categories</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/all-products">ShopNOW</MDBNavbarLink>
            </MDBNavbarItem>

            {/* Search Bar */}
            <MDBInputGroup className="mx-3" tag="form">
              <MDBInput label="Search" />
              <MDBBtn rippleColor="dark">
                <MDBIcon icon="search" />
              </MDBBtn>
            </MDBInputGroup>

            {/* Cart Icon */}
            <MDBNavbarItem>
              <MDBNavbarLink href="/cart">
                <MDBIcon fas icon="shopping-cart" size="lg" />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
