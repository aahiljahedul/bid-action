import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center   p-10">
  <aside>
  <h2><span class="font-bold text-blue-800">Auction</span><span class="font-bold text-yellow-400">Gallery</span></h2>
    <p className="font-bold">
    Bid .   Win .  Own.

    </p>
    <ul class="flex justify-between gap-5">
                        <li><a href="">Home</a></li>
                        <li><a href="">Auctions</a></li>
                        <li><a href="">Catagories</a></li>
                        <li><a href="">How to work</a></li>
                    </ul>
    <p>Copyright © {new Date().getFullYear()} - AuctionHub.All rights reserved</p>
  </aside>


</footer>
        </div>
    );
};

export default Footer;