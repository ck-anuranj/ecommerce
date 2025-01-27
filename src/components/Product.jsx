import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-gray-100 hover:bg-gray-400 product border p-4 rounded shadow-md flex flex-col justify-between">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <div className="mt-auto flex justify-between items-center">
        <Link
          to={`/product/${product.id}`}
          className="text-white bg-violet-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all" style={{ backgroundColor: '#AAA7AD' }}
        >
          View Product
        </Link>
        <button
          onClick={handleAddToCart}
          className="text-white bg-green-700 hover:bg-green-600 px-8 py-2 rounded-lg transition-all" style={{ backgroundColor: '#937A62' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;