import React from 'react';
import HomeSlideShow from "../../components/home/HomeSlideShow.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/navbar/CustomerNavbar.jsx";
import HorizontalScroll from "../../components/HorizontalScroll.jsx";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">MERN Stack App with Tailwind CSS</h1>
        <p className="text-gray-700">Welcome to my MERN stack application with Tailwind CSS for styling!</p>
      </div>
    </div>
  );
}

export default App;
