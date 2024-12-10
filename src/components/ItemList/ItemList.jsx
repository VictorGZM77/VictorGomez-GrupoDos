
import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../Data/asyncMock'; 

const ItemList = () => {
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>; 
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-center text-2xl font-bold mb-8">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link to={`/purchase/${product.id}`} key={product.id} className="border p-4 text-center block">
            <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
