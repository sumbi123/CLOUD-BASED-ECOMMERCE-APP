import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the E-Commerce Platform</h1>
      <Link to="/products">View Products</Link>
    </div>
  );
}

export default Home;
