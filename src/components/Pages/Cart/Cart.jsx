
import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '/src/stores/useCartStore';  

const Cart = () => {
  const { items: cart, removeFromCart } = useCartStore();  

  const subtotal = cart.reduce((acc, product) => acc + parseFloat(product.price.replace('$', '').replace('.', '')), 0);

  if (cart.length === 0) {
    return <p className="text-center py-16">Tu carrito está vacío</p>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold mb-6">Carro de compras</h2>
      <table className="table-auto w-full text-left mb-6">
        <thead>
          <tr className="border-b">
            <th className="p-4">ARTÍCULO</th>
            <th className="p-4">PRECIO</th>
            <th className="p-4">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-4 flex items-center">
                <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                {product.name}
              </td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">
                <button
                  onClick={() => removeFromCart(product.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between text-xl font-bold">
        <span>Subtotal:</span>
        <span>{`$${subtotal.toFixed(2)}`}</span>
      </div>
      <div className="mt-6">
        <Link to="/purchase" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">Proceder a la compra</Link>
      </div>
    </div>
  );
}

export default Cart;
