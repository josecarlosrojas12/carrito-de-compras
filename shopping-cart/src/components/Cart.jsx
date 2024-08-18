import React from 'react';

const Cart = ({ cartItems, onClose, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-80">
        <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p>
        <button
          onClick={onCheckout}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
        >
          Pagar
        </button>
        <button onClick={onClose} className="text-red-500 mt-2">Cerrar</button>
      </div>
    </div>
  );
};

export default Cart;
