import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between">
  <div className="flex justify-between">
  <h2><span className="font-bold text-blue-800">Auction</span><span className ="font-bold text-yellow-400">Gallery</span></h2>
  </div>
  <div class="">
                    <ul class="flex justify-between gap-5">
                        <li><a href="">Home</a></li>
                        <li><a href="">Auctions</a></li>
                        <li><a href="">Catagories</a></li>
                        <li><a href="">How to work</a></li>
                    </ul>
                </div>
  <div className="flex gap-5">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
          <span className="badge badge-sm indicator-item">9</span>
        </div>
      </div>
  
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;