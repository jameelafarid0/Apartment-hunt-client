import React, { useEffect, useState } from 'react';
import MyRentTable from './MyRentTable';

const MyRent = () => {
    const [service,setService] = useState([]);

    useEffect(()=>{
        fetch(`https://obscure-ridge-72586.herokuapp.com/singlebooking?email="add_user_email_here"`)
        .then(res =>  res.json())
        .then(data =>{
            setService(data);
        })
    },[])

    return (
        <div style={{backgroundColor:"white"}} className="p-3 table-responsive">
             <table className="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">House Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        service.map(service => <MyRentTable key={service._id} service={service}></MyRentTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyRent;