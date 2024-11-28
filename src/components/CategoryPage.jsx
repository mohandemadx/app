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
                backgroundImage: "url('https://via.placeholder.com/300x200?text=PC')",
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/personal-computers" outline size="lg">
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
                backgroundImage: "url('https://via.placeholder.com/300x200?text=Smart+Phones')",
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/smart-phones" outline size="lg">
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
                backgroundImage: "url('https://via.placeholder.com/300x200?text=Hardware+Accessories')",
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/hardware-accessories" outline size="lg">
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
                backgroundImage: "url('https://via.placeholder.com/300x200?text=Application+Software')",
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/application-software" outline size="lg">
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
                backgroundImage: "url('https://via.placeholder.com/300x200?text=System+Software')",
                height: '200px',
                borderRadius: '10px',
              }}
            >
              <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <MDBBtn tag="a" href="/product/system-software" outline size="lg">
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
