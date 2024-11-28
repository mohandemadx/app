import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/products'; // Import the product data
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Header from './Header';
import Footer from './Footer';

export default function ViewProductPage() {
  const { category, productId } = useParams();

  // Find the category
  const categoryData = categories.find((cat) => cat.name.toLowerCase().replace(' ', '-') === category);

  // Find the product within the category
  const product = categoryData?.products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return (
      <div>
        <Header />
        <MDBContainer className="my-5 text-center">
          <h2>Product Not Found</h2>
        </MDBContainer>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <MDBContainer className="my-5">
        <MDBRow>
          {/* Product Image */}
          <MDBCol md="6" className="mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
          </MDBCol>

          {/* Product Details */}
          <MDBCol md="6" className="mb-4">
            <h2>{product.name}</h2>
            <p>{product.specs}</p>
            <h4 className="text-primary">{product.price}</h4>
            <MDBBtn tag="a" href="/product/" color="primary" className="mt-3">
              Back to Products
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}
