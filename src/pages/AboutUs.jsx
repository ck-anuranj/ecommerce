import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
        Welcome to ShopHaven, your ultimate destination for all things shopping! We believe that finding the perfect products should be
         a delightful experience, which is why we curate a diverse selection of high-quality items across various categories, from fashion
          and home goods to electronics and unique gifts.
        </p>
        <p className="text-gray-700 mb-4">
        At ShopHaven, we’re dedicated to providing exceptional customer service and a seamless online shopping experience. Our user-friendly
         website makes it easy to browse, compare, and discover the latest trends and timeless classics.
        </p>
        <p className="text-gray-700 mb-4">
        We partner with trusted brands and local artisans to bring you exclusive products you won't find anywhere else. With fast shipping 
        and easy returns, we ensure your satisfaction every step of the way.
        </p>
        <p className="text-gray-700 mb-4">
        Join our community of savvy shoppers and elevate your shopping experience at ShopHaven—where every purchase feels like a treasure found!
        </p>
        <h2 className="text-2xl font-semibold mt-6">Our Team</h2>
        <ul className="list-disc list-inside mt-4">
          <li className="text-gray-700">Anuranj CK - CEO & Founder</li>
          <li className="text-gray-700">Tony Krooz - Head of Product</li>
          <li className="text-gray-700">Tony Jaa - Customer Service</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
