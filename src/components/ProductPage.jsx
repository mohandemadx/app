import React from 'react';
import { useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { categories } from '../data/products.js'; // Assuming the categories data is in a file called products.js
import Header from './Header';
import Footer from './Footer';

export default function ProductsPage() {
  const { category } = useParams(); // Get category from URL parameters

  // Find the category based on the parameter
  const selectedCategory = categories.find(
    (cat) => cat.name.toLowerCase().replace(' ', '-') === category
  );

  if (!selectedCategory) {
    return (
      <div>
        <Header />
        <MDBContainer className="my-5 text-center">
          <h2>Category Not Found</h2>
        </MDBContainer>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Products Section */}
      <MDBContainer className="my-5">
        <h2 className="text-center mb-5">{selectedCategory.name} Products</h2>

        <MDBRow>
          {selectedCategory.products.map((product) => (
            <MDBCol key={product.id} md="4" className="mb-4">
              <MDBCard className="h-100">
                <MDBCardImage src={product.image} alt={product.name} position="top" />
                <MDBCardBody>
                  <MDBCardTitle>{product.name}</MDBCardTitle>
                  <MDBCardText>{product.specs}</MDBCardText>
                  <MDBCardText className="font-weight-bold">{product.price}</MDBCardText>
                  <MDBBtn
                    tag="a"
                    href={`/product/${category}/${product.id}`}
                    color="primary"
                  >
                    View Product
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
}
