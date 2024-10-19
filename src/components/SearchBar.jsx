import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'


const SearchBar = ({ onSearch }) => {
  const handleInput = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center mb-0 mt-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          onChange={handleInput}
          className="w-full p-3 pl-5 pr-12 border border-gray-300 rounded-md shadow-2xl focus:outline-none focus:ring-1 
          focus:ring-violet-100 transition duration-200"
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 focus:outline-none"
        >
          <i class="fas fa-search"></i>
        </button>

        
        
      </div>
    </div>
  );
};

export default SearchBar;