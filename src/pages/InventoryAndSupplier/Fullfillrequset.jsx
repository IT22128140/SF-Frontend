import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import DeleteButton from '../../components/button2/DeleteButton';
import { useNavigate } from 'react-router-dom';

const Fullfillrequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const headers = ['Fabric Type', 'Button Type', 'Thread Type', 'Other Material', 'Filling Date', ''];

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/ReqFF`)
      .then((response) => {
        setRequests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/ReqFF/${id}`)
      .then(() => {
        setLoading(false);
        setRequests(requests.filter(request => request._id !== id)); // Remove deleted request from state
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('An error occurred while deleting the request.');
      });
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="my-9 text-8xl">Fullfilled Requests</h1>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="min-w-full">
          <TableView headers={headers} />
          <tbody>
            {requests.map((request) => (
              <tr key={request._id} className="h-8">
                <td className="text-center border rounded-md border-slate-700">{request.fabricType}</td>
                <td className="text-center border rounded-md border-slate-700">{request.buttonType}</td>
                <td className="text-center border rounded-md border-slate-700">{request.threadType}</td>
                <td className="text-center border rounded-md border-slate-700">{request.otherMaterial}</td>
                <td className="text-center border rounded-md border-slate-700">{request.fillingDate}</td>
                <td className="text-center border rounded-md border-slate-700">
                  <div className="flex justify-around">
                    <DeleteButton onClick={() => handleDelete(request._id)}>Delete</DeleteButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Fullfillrequest;
