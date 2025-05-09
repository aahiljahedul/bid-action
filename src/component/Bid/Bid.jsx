import React from 'react';

const Bid = ({bid}) => {
    return (
        <>
            <tr>
               <td><img src={bid.imageUrl} alt="" />{bid.item}</td>
               <td>{bid.timeLeft}</td>
               <td> {bid.currentBid} </td>
               <td><button></button></td>
            </tr>
</>
        
    );
};

export default Bid;