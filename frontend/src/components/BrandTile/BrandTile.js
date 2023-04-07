import './BrandTile.css'
import { React, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BrandTile = () => {

    const [brandName, setBrandName] = useState({brands: []});
    const [brandDesc, setBrandDesc] = useState({brandDescs: []})
    // const { id } = useParams();
    const { brand } = useParams();


    useEffect(
        () => {
            const fetchBrands = async () => {
                // const response = await fetch('http://localhost:8080/team/Sunrisers Hyderabad');
                const response = await fetch(`http://localhost:4000/webstore/products/${brand}`);
                const data = await response.json();
                console.log(data);
            };

            fetchBrands();

        },[brand]
    );

    if(!brand || !brand.brandName) {
        return <h1>Out of stock :/</h1>
    }


    return (
        <div className='BrandTile'>
            <h3>BrandName</h3>
            <p>BrandDescription</p>
            {/* <h3>{brand.brandName}</h3> */}
            {/* <p>{brand.brandDesc}</p> */}
        </div>
    )
}

export default BrandTile;