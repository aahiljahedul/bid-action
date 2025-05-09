import React, { useState } from 'react';
import { useEffect } from 'react';
import Bid from '../Bid/Bid'




const Bids = ({ handleHeart,handleTotal }) => {
  const [bids,setBids]=useState([]);

  useEffect(()=>{
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>setBids(data))
    
  },[])
  return (
    <div className=''>

            <div className=" bg-white rounded-2xl">
           <table className='table'>
            <thead>
              <tr>
                <th>Items</th>
                <th>Current Bid</th>
                <th>Time Left </th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {
              bids.map((bid)=><Bid key={bid.item} bid={bid}  handleHeart ={ handleHeart }  handleTotal ={handleTotal}></Bid>)
              }
            </tbody>
           </table>
            </div>
    </div>
  );
};

export default Bids;