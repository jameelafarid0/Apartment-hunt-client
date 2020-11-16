import React, {  useEffect, useState } from 'react';
import rentInfo from '../../fakeData/rentInfo';
import Apartment from '../Apartment/Apartment';
import './HouseRent.css'

const HouseRent = () => {
    const [rent, setRent] = useState([]);

    useEffect(() => {
        fetch('https://shielded-lowlands-58151.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setRent(data))
    }, [])

    return (
        <div className="background">
            <h5 className="h5">House rent</h5>
            <div className="h2">
                <h2>Discover the latest Rent available today</h2>
            </div>


            <div className="d-flex  justify-content-center ">
                <div className="container-md  row  mb-5 ml-5">
                    {
                        rent.map(place => <Apartment
                            place={place}
                            key={place.key}
                        ></Apartment>)
                    }
                </div>
            </div>



        </div>
    );
};

export default HouseRent;