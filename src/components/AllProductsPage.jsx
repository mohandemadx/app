import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { categories } from '../data/products.js';  // Assuming the categories data is in a file called products.js
import Header from './Header';
import Footer from './Footer';

export default function AllProducts() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Products Section */}
      <MDBContainer className="my-5">
        <h2 className="text-center mb-5">Browse Products by Category</h2>

        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-center mb-4">{category.name}</h3>
            <MDBRow>
              {category.products.map((product) => (
                <MDBCol key={product.id} md="4" className="mb-4">
                  <MDBCard className="h-100">
                    <MDBCardImage src={product.image} alt={product.name} position="top" />
                    <MDBCardBody>
                      <MDBCardTitle>{product.name}</MDBCardTitle>
                      <MDBCardText>
                        {product.specs}
                      </MDBCardText>
                      <MDBCardText className="font-weight-bold">
                        {product.price}
                      </MDBCardText>
                      <MDBBtn tag="a" href={`/product/${category.name.toLowerCase().replace(' ', '-')}/${product.id}`} color="primary">
                        View Product
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </div>
        ))}
      </MDBContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
}
