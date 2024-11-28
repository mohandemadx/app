import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import Header from './Header';  // Make sure you import your Header component
import Footer from './Footer';  // Make sure you import your Footer component

export default function CategoriesPage() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Categories Section */}
      <MDBContainer className="my-5">
        <h2 className="text-center mb-5">Shop by Categories</h2>
        <MDBRow>
          {/* Personal Computers Category */}
          <MDBCol md="4" className="mb-4">
            <div
              className="bg-image hover-overlay"
              style={{
                backgroundImage: "url('/assets/mac.png')",
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/personal-computers" size="lg" className="btn-fill">
                    Personal Computers
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBCol>

          {/* Smart Phones Category */}
          <MDBCol md="4" className="mb-4">
            <div
              className="bg-image hover-overlay"
              style={{
                backgroundImage: "url('/assets/iphone16.png')",
                backgroundSize: 'cover',
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/smart-phones" size="lg" className="btn-fill">
                    Smart Phones
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBCol>

          {/* Hardware Accessories Category */}
          <MDBCol md="4" className="mb-4">
            <div
              className="bg-image hover-overlay"
              style={{
                backgroundImage: "url('/assets/keyboard.jpeg')",
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/hardware-accessories" size="lg" className="btn-fill" >
                    Hardware Accessories
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          {/* Application Software Category */}
          <MDBCol md="4" className="mb-4">
            <div
              className="bg-image hover-overlay"
              style={{
                backgroundImage: "url('/assets/AI.jpeg')",
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/application-software" size="lg" className="btn-fill">
                    Application Software
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBCol>

         {/* System Software Category */}
<MDBCol md="4" className="mb-4">
  <div
    className="bg-image hover-overlay"
    style={{
      backgroundImage: "url('assets/Windows.jpeg')",
      height: '200px',
      borderRadius: '10px',
      backgroundSize: 'cover', // Optional: Ensure the image covers the container
      backgroundPosition: 'center', // Optional: Ensure the image is centered
    }}
  >
    <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <MDBBtn tag="a" href="/product/system-software" size="lg" className="btn-fill">
          System Software
        </MDBBtn>
      </div>
    </div>
  </div>
</MDBCol>


        </MDBRow>
      </MDBContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
}
