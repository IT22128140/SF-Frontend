import axios from 'axios';

// Function to fetch completed repairs
export const fetchRepairWorkers = async () => {
  try {
    const response = await axios.get('http://localhost:5555/repairs/rworkers'); // Replace port with your actual port number
    const repairWorkers = response.data.data.map(worker => worker.employeeID); // Extract Repair IDs and store them in an array
    return repairWorkers; // Return the array of completed repair IDs
  } catch (error) {
    console.error('Error fetching repair', error);
    return []; // Return an empty array if there's an error
  }
};
