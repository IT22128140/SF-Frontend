import React, { useState, useEffect } from 'react';
import axios from "axios";
import Footer from "../components/footer/Footer";
import StoreNavbar from "../components/navbar/staffheader/StoreNavbar";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5555/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        // Handle the error appropriately (e.g., display an error message)
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-500">★</span>);
    }
    return stars;
  };

  const handleSearch = (event) => {
    const searchTermNumber = Number(event.target.value);
    if (!isNaN(searchTermNumber) && searchTermNumber >= 1 && searchTermNumber <= 5) {
      setSearchTerm(searchTermNumber);
    } else {
      setSearchTerm(''); // Clear search term if not a valid number
    }
  };

  const handleContact = (name, email, phoneNumber) => {
    setContactData({name, email, phoneNumber });
  };

  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete(`http://localhost:5555/feedbacks/${id}`);
  
      // Update the UI to remove the deleted feedback item
      setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id));
  
      // Provide feedback to the user
      console.log(`Feedback with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting feedback:', error);
      // Handle the error appropriately (e.g., display an error message to the user)
    }
  };

  const filteredFeedbacks = feedbacks
    .filter(feedback => {
      if (searchTerm) {
        return feedback.rating === searchTerm;
      }
      return true;
    })
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <StoreNavbar />
      <div className="mb-4">
        <input type="number" value={searchTerm} onChange={handleSearch} className="border border-gray-300 p-2 rounded-md" placeholder="Search by rating" />
      </div>
      <h2 className="text-4xl font-semibold mb-4 text-center">FEEDBACKS</h2>
      <div className="grid grid-cols-1 gap-4">
      {filteredFeedbacks.map((feedback, index) => (
      <div key={index} className="border border-primary p-4 rounded-md ">
        <div className="text-yellow-500 text-3xl">
          <p>{renderStarRating(feedback.rating)}</p>
          </div>
          <p>{feedback.feedback}</p>
          <div className="flex justify-between items-center">
            <button onClick={() => handleContact(feedback.name, feedback.email, feedback.phoneNumber)} className="bg-green-500 text-white px-2 py-1 rounded-md">Contact {feedback.name}</button>
            <button onClick={() => handleDelete(feedback.id)} className="bg-red text-white px-2 py-1 rounded-md">Delete</button>
            </div>
            </div>
          ))}
      </div>
      {contactData && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <p>Name: {contactData.name}</p>
            <p>Email: {contactData.email}</p>
            <p>Phone Number: {contactData.phoneNumber}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setContactData(null)}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FeedbackPage;