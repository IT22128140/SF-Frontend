import React, { useState, useEffect } from 'react';
import axios from "axios";
import Footer from "../components/footer/Footer";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5555/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
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

  const handleContact = async (name, email) => {
    try {
      await axios.post('http://localhost:5555/contact', { name, email });
      alert(`Contacting ${name} at ${email} regarding their feedback`);
    } catch (error) {
      console.error('Error contacting user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto ">
      <h2 className="text-4xl font-semibold mb-4 text-center">FEEDBACKS</h2>
      <div className="grid grid-cols-1 gap-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="border border-primary p-4 rounded-md">
            <div className="text-yellow-500 text-3xl">
              <p>{renderStarRating(feedback.rating)}</p>
            </div>
            <p>{feedback.feedback}</p>
            <button onClick={() => handleContact(feedback.name, feedback.email)} className="mt-2 bg-green-500 text-white px-2 py-1 rounded-md">Contact {feedback.name}</button>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default FeedbackPage;