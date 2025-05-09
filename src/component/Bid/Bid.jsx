import React from 'react';
import { CiHeart } from "react-icons/ci";

const Bid = ({bid}) => {
    return (
        <>
            <tr>
               <td><img src={bid.imageUrl} alt="" />{bid.item}</td>
               <td>{bid.timeLeft}</td>
               <td> {bid.currentBid} </td>
               <td><button><CiHeart /></button></td>
            </tr>
</>
        
    );
};

export default Bid;