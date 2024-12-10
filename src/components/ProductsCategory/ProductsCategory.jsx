
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductByCategory } from '../../Data/asyncMock'; 

const ProductsCategory = () => {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByCategory(categoryId)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold mb-6">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} - Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 text-center">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </Link>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Ver detalles
              </Link>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsCategory;
