// src/pages/Home.jsx
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles.css'; // Import the custom CSS file for divider styling (optional)

function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content Section */}
      <MDBContainer className="py-5">
        {/* Website Title */}
        <MDBRow className="mb-4">
          <MDBCol className="text-center">
            <MDBTypography tag="h1" className="display-3 font-weight-bold">
              Welcome to ZAK Store
            </MDBTypography>
          </MDBCol>
        </MDBRow>

        {/* Separator */}
        <hr className="my-4" />

        {/* Website Logo */}
        <MDBRow className="mb-5">
          <MDBCol className="text-center">
            <img
              src="/assets/logo.png" // Assuming the logo is in the public/assets folder
              alt="Logo"
              height="120"
            />
          </MDBCol>
        </MDBRow>

        {/* Separator */}
        <hr className="my-4" />

        {/* Vision and Mission Section */}
        <MDBRow className="mb-5">
          <MDBCol className="text-center">
            <MDBTypography tag="h3" className="mb-3">Our Vision & Mission</MDBTypography>
            <MDBTypography tag="p" className="lead">
              Our mission is to provide the best shopping experience with a vast variety of products, great offers, and exceptional customer service.
            </MDBTypography>
            <MDBTypography tag="p" className="lead">
              We envision becoming a one-stop-shop for all your shopping needs, delivering excellence at every step.
            </MDBTypography>
          </MDBCol>
        </MDBRow>

        {/* Separator */}
        <hr className="my-4" />

        {/* About the Owner */}
        <MDBRow className="mb-5">
          <MDBCol className="text-center">
            <MDBTypography tag="h3" className="mb-3">About the Owner</MDBTypography>
            <MDBTypography tag="p" className="lead">
              ZAK Store was founded by Zakaria, an entrepreneur with a passion for providing the best products and services to customers around the globe.
            </MDBTypography>
          </MDBCol>
        </MDBRow>

        {/* Separator */}
        <hr className="my-4" />

        {/* Contact Us Section */}
        <MDBRow className="mb-5">
          <MDBCol className="text-center">
            <MDBTypography tag="h3" className="mb-3">Contact Us</MDBTypography>
            <MDBTypography tag="p" className="lead">
              Feel free to reach out to us with any questions or feedback! We're here to help you with your shopping experience.
            </MDBTypography>
            <MDBBtn tag="a" href="mailto:contact@shoppingheaven.com" size="lg" color="primary">
              Email Us
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
