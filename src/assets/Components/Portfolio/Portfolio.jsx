import React, { useState } from 'react';
import Title from '../Title/Title';
import './Portfolio.css';
import poert1 from '../../imgs/poert1.png';
import port2 from '../../imgs/port2.png';
import port3 from '../../imgs/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: poert1 },
    { id: 2, src: port2 },
    { id: 3, src: port3 },
    { id: 4, src: poert1 },
    { id: 5, src: port2 },
    { id: 6, src: port3 }
  ];

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  function handleCloseModal() {
    setSelectedImage(null);
  }

  return (
    <>
      <div className="portfolio-page">
        <div className="container py-5">
          <Title color="text-dark" bgColor="bg-dark">PORTFOLIO COMPONENT</Title>

          <div className="row g-5 mt-3">
            {images.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="portfolio-item rounded-3" onClick={() => handleImageClick(item)}>
                  <img src={item.src} className="w-100 rounded-3" />
                  <div className="portfolio-overlay rounded-3">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="portfolio-modal" onClick={handleCloseModal}>
          <img src={selectedImage.src} className="portfolio-modal-image rounded-3" />
        </div>
      )}
    </>
  );
}