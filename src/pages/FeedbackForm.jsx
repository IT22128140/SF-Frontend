import React, { useState } from 'react';

const StarRating = ({ rating, onStarClick }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div>
            {stars.map((star, index) => (
                <span
                key={index}
                className={star <= rating ? 'text-yellow-500 text-2xl' : 'text-gray-300 text-6xl'}
                onClick={() => onStarClick(star)}
            >
                    &#9733;
                </span>
            ))}
        </div>
    );
};

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: 0,
        image: null
    });

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleStarClick = (rating) => {
        setFormData({ ...formData, rating: rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name === '' || formData.email === '' || formData.rating === 0 || formData.feedback === '') {
          alert('Please fill in all fields before submitting.');
          return;}
        else console.log(formData); 
    };

    return (
        <div className="feedback-form bg-gray-100 p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Feedback Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="name" className="block">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded border-primary" /><br />

                <label htmlFor="email" className="block">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded border-primary" /><br />

                <label className="block">Rating:</label>
                <StarRating rating={formData.rating} onStarClick={handleStarClick} />
                <label htmlFor="image" className="block">Upload Image:</label>
                <input type="file" id="image" name="image" onChange={handleChange} className="w-full" />
            
                <label htmlFor="feedback" className="block">Feedback:</label>
                <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} rows="4" required className="w-full px-4 py-2 border rounded border-primary"></textarea><br />

                <div className="w-full flex justify-between">
                <button type="submit" className="bg-white text-primary px-14 py-2 rounded"
                //</form>onClick={onCancelClick}
                >CANCEL</button>
                <button type="submit" className="bg-primary text-white px-14 py-2 rounded
                //</form>onClick={handleSubmitFeedback}
                ">SUBMIT</button>
                </div>  
            </form>
        </div>
    );
};

export default FeedbackForm;