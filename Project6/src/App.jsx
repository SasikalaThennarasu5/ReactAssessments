import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Products />
      </main>
    </div>
  );
}

export default App;
