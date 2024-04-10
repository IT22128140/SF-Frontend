import React, { useState } from 'react';
import Footer from "../components/footer/Footer";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([
    { feedback: 'Great job!', rating: 5, name: 'John Doe', email: 'johndoe@example.com' },
    { feedback: 'Very helpful', rating: 4, name: 'Jane Smith', email: 'janesmith@example.com' },
    { feedback: 'Nice work', rating: 3, name: 'Alex Johnson', email: 'alexjohnson@example.com' }
  ]);
  const [newFeedback, setNewFeedback] = useState('');
  const [newRating, setNewRating] = useState(0);

  const handleAddFeedback = () => {
    if (newFeedback && newRating > 0 && newRating <= 5) {
      setFeedbacks([...feedbacks, { feedback: newFeedback, rating: newRating, name: 'New User', email: 'newuser@example.com' }]);
      setNewFeedback('');
      setNewRating(0);
    }
  };

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-500">★</span>);
    }
    return stars;
  };

  const handleContact = (name, email) => {
    alert(`Contacting ${name} at ${email} regarding their feedback`);
  };

  return (
    <div className="container mx-auto px-60 py-60">
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