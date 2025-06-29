import React, { useState } from 'react';
import './ProductDetail.css';
import img1 from '../assets/product1.webp';
import img2 from '../assets/product2.webp';
import img3 from '../assets/product3.webp';
import img4 from '../assets/product4.webp';

const ProductDetail = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    name: 'Wireless Bluetooth Headphones',
    price: '$149.99',
    rating: 4.2,
    images: [img1, img2, img3, img4],
    description: `Experience crystal-clear audio and immersive bass with our premium wireless headphones. Perfect for music, gaming, and calls.`,
    reviews: [
      '🎶 Amazing sound quality!',
      '🔥 Super comfy and long battery life.',
      '👌 Worth the price.',
    ],
    specifications: {
      Brand: 'SoundX',
      Battery: '30 hours',
      Connectivity: 'Bluetooth 5.0',
      Charging: 'USB-C Fast Charging',
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p>{product.description}</p>;
      case 'reviews':
        return (
          <ul>
            {product.reviews.map((review, i) => (
              <li key={i}>{review}</li>
            ))}
          </ul>
        );
      case 'specifications':
        return (
          <ul>
            {Object.entries(product.specifications).map(([key, val]) => (
              <li key={key}>
                <strong>{key}:</strong> {val}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>★</span>);
  }

  if (halfStar) {
    stars.push(<span key="half">☆</span>);
  }

  while (stars.length < 5) {
    stars.push(<span key={stars.length}>☆</span>);
  }

  return <div className="star-rating">{stars} <span className="rating-number">({rating})</span></div>;
};


  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <div className="product-wrapper">
        <div className="image-section">
          <img
            src={product.images[activeImage]}
            alt="product"
            className="main-image"
          />
          <div className="thumbnail-row">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`thumbnail ${idx === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(idx)}
              />
            ))}
          </div>
        </div>

        <div className="info-section">
          <p className="price">{product.price}</p>
          {renderStars(product.rating)}

          <div className="tabs">
            <button
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
            <button
              className={activeTab === 'specifications' ? 'active' : ''}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
          </div>

          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
