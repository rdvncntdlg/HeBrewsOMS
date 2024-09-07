import React from 'react';

function Logo() {
  return (
    <div className="logo-container">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/775a1679251c75046d413b100265fffa2701ae6f3b53c657655c0c6413ad35e2?placeholderIfAbsent=true&apiKey=f5640191d60f45f28ab9a480644a186e" alt="Company Logo" className="logo-image" />
      <style jsx>{`
        .logo-container {
          border-radius: 20px 0 0 20px;
          background-color: #0b0c0e;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 226px 80px;
        }
        .logo-image {
          aspect-ratio: 1.01;
          object-fit: contain;
          object-position: center;
          width: 220px;
          box-shadow: 0 4px 4px rgba(255, 255, 255, 0.25);
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .logo-container {
            border-radius: 20px 20px 0 0;
            padding: 100px 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Logo;