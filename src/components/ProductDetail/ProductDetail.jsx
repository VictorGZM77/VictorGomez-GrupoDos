
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCartStore from '../../stores/useCartStore'; 
import products from '/src/Data/asyncMock';

const ProductDetail = () => {
  const { id } = useParams();  
  const product = products.find((p) => p.id === parseInt(id));  
  const { addToCart } = useCartStore(); 


  const [selectedSize, setSelectedSize] = useState('');
  
 
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleSizeChange = (e) => setSelectedSize(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  const handleAddToCart = () => {
    if (selectedSize && quantity > 0 && quantity <= product.stock) {
      addToCart({ ...product, selectedSize, quantity });
      alert('Producto agregado al carrito');
    } else {
      alert('Por favor, selecciona una talla y una cantidad válida.');
    }
  };

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.category}</p>
          <p className="text-xl font-bold mb-4">{product.price}</p>
          

          <div className="mb-4">
            <label className="block text-sm font-semibold">Selecciona tu talla:</label>
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Selecciona una talla</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>


          <div className="mb-4">
            <label className="block text-sm font-semibold">Cantidad:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={product.stock}
              className="border p-2 rounded w-full"
            />
          </div>


          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
