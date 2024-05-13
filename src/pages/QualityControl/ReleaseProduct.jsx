import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchQE";
import TableView from '../../components/table/TableView';
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import AcceptButton from "../../components/button2/AcceptButton";
import ViewButton from '../../components/button2/ViewButton';
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";


const ReleaseProduct = () => {
    const [releaseProducts, setReleaseProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const headers = ['Release ID', 'Product Code', 'Release Type', 'Fabric Type', 'Color', 'Stitching Type', 'Quantity', 'Operations']
    
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/qualityControl/releaseProduct')
            .then((response) => {
                setReleaseProducts(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    const itemCountMap = {};
    releaseProducts.forEach((request) => {
    if (request.productCode) {
      const productCode = request.productCode.toLowerCase();
      itemCountMap[productCode] = (itemCountMap[productCode] || 0) + 1;
    }
  });

  
  const filteredRequests = releaseProducts.filter((v) => v.productCode && v.productCode.toLowerCase().includes(search.toLowerCase()));
  const itemCount = filteredRequests.length;
  const totalItemCount = releaseProducts.length;

    return (
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
        <QENavbar
        home={true}
        cel={false}
        rel={false}
        fel={false}
        att={false}
        sal={false}
      />
          <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Release Product</h1>  
            
            
          <SearchBar placeholder={"Enter the Product code"} onSearch={setSearch} />
            {loading ? (
                <Spinner />
            ) : (

                <table className='min-w-full'>
                    <TableView headers={headers} />
                    <tbody>
                        {releaseProducts && filteredRequests.map((releaseProduct, index) => (
                            <tr key={releaseProduct._id} className='h-8'>
                                
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.releaseId}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.productCode}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.customerID}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.fabricType}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.color}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.stitchingType}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.quantity}
                                </td>
                                
                                <td className='border border-slate-700 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={ `/qualityControl/releaseProduct/view/${releaseProduct._id}`}>
                                      <ViewButton/>
                                    </Link>
                                    <Link to={`/qualityControl/releaseProduct/edit/${releaseProduct._id}`}>
                                      <EditButton/>
                                    </Link>
                                    <Link to={`/qualityControl/releaseProduct/delete/${releaseProduct._id}`}>
                                        <DeleteButton/>
                                    </Link>
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

export default ReleaseProduct
