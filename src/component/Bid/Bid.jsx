import React from 'react';
import { CiHeart } from "react-icons/ci";

const Bid = ({bid, handleHeart ,handleTotal}) => {
   
    return (
        <>
            <tr>
               <td className='flex gap-3'><img className='w-10' src={bid.imageUrl} alt="" />{bid.item}</td>
               <td>{bid.timeLeft}</td>
               <td> {bid.currentBid} </td>
               <td><button key={bid.bid} onClick={()=>{handleHeart(bid),handleTotal(bid.currentBid)}} className={`disabled:cursor-not-allowed text-gray-500 hover:text-red-500 transition`}><CiHeart  size={25}/></button></td>
            </tr>
</>
        
    );
};

export default Bid;