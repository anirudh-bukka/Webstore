import './BrandTile.css'
import { React, useEffect, useState } from 'react';

const BrandTile = ({ brandName, brandDesc }) => {
    if(!brandName) return null;

    const [brand, setBrand] = useState({brands: []});
    const { brandName, brandDesc } = useParams();


    return (
        <div className='BrandTile'>
            <h3>Brand Name</h3>
            <p>Brand Description</p>
        </div>
    )
}

export default BrandTile;