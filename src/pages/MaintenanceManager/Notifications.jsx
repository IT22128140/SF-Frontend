import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5555/maintenance/send-notifications');
      setNotifications(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setLoading(false);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='flex mt-4 pr-4'>
        <div className=''>
      {/* Button to toggle the visibility of the sidebar */}
      <button onClick={toggleSidebar} className=" top-0 left-0 z-10 p-2 m-2 bg-white text-ternary rounded-md hover:bg-bgc">
        {showSidebar ? 'Close' : 'Notifications'}
      </button>

      {/* Sidebar container */}
      {showSidebar && (
        <div className="absolute top-30 left-0 z-20 w-64 bg-white bg-opacity-90 p-4 overflow-y-auto">
          
          <h2 className="text-lg text-ternary font-semibold mb-10"> Maintenance Alerts</h2>

          {loading ? (
                <Spinner />
            ) : (

                <div className='ml-1 mr-1 font-BreeSerif text-white'>
                       {notifications.map((notification, index) => (
                <div className='border-1 rounded-md bg-red-600 opacity-100 shadow-md p-4 mb-4' key={index}>
                {notification}
              </div>
              ))}

                </div>
                
            )}
        </div>
      )}
    </div>
    </div>
  );
};

export default NotificationComponent;
