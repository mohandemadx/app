import React from 'react';
import { useParams } from 'react-router-dom'; // For dynamic routing based on category
import { categories } from '../data/products.js'; // Import categories data

export default function ProductPage() {
  const { categoryName } = useParams(); // Extract category name from URL
  const category = categories.find(cat => cat.name.toLowerCase().replace(" ", "-") === categoryName);

  if (!category) {
    return <h2>Category not found</h2>; // Display an error if category is not found
  }

  return (
    <div>
      <header>
        <h1>{category.name} - Products</h1>
      </header>

      <div className="container">
        <div className="row">
          {category.products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Specs: {product.specs}</p>
                  <p className="card-text">Price: {product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
}
