import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md text-center">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Product;
