import React, { useState } from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
     {/* Header */}
     <Header />

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>BLACK FRIDAY OFFERS</h1>
              <h4 className='mb-3'>50% discount</h4> 
              <MDBBtn tag="a" href="/product:product-name" outline size="lg">
                Buy Now
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     <Footer />

    </header>
  );
}