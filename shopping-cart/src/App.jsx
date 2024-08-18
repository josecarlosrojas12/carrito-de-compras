import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
import "./index.css"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: 'Producto 1', price: 25.00, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: 30.00, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: 20.00, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Producto 4', price: 15.00, image: 'https://via.placeholder.com/150' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCheckout = () => {
    alert('Gracias por tu compra!');
    setCartItems([]); // Limpiar carrito después de pagar
    setIsCartOpen(false);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.map(product => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
}

export default App;
