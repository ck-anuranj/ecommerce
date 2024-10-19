import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-violet-400 p-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-32">

        {/* <Link 
            to="/" 
            className="text-white font-bold hover:text-blue-300 transition-colors text-4xl"
          >
            ShopHaven    <br />
            <p style={{font:'caption'}}>Shop. Smile. Repeat</p>
          </Link> */}

          <Link
          to="/"
          className="mr-24"
          >
            <img src={logo} alt="Website Logo" className="logo" style={{width:'140px', height:'50px'}}/>
          </Link>

          

          

            
          <Link 
            to="/" 
            className="font-nunito text-white hover:text-blue-300 transition-colors text-2xl"
          >
            Home    
          </Link>

          
          <Link 
            to="/product" 
            className="font-nunito text-white  hover:text-blue-300 transition-colors text-2xl"
          >
            Products
          </Link>

          <Link 
            to="/login" 
            className="font-nunito text-white hover:text-blue-300 transition-colors text-2xl"
          >
            Profile    
          </Link>


          <Link 
            to="/about"
            className="text-white font-nunito hover:text-blue-300 transition-colors text-2xl"
          >
            About Us
          </Link>

         


        </div>
        <Link 
          to="/cart" 
          className="text-white font-nunito hover:text-blue-300 transition-colors text-3xl"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;