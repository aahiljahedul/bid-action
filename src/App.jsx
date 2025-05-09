
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Footer from './component/Footer/Footer'
import Bids from './component/Bids/Bids'
import { useState } from 'react'
function App() {
  const [heartMark,setHeartMark] =useState([]);



const handleHeart = (bid) =>{
setHeartMark([...heartMark,bid])

}

// }

  return (
    <>
   <div>
    <div><Navbar></Navbar></div>
    <div><Hero></Hero></div>
    <div className='bg-blue-50 p-4 mb-3'>
    <h2 className='font-bold '>Active Auctions</h2>
    <p>Discover and bid on extraordinary items</p>
    
    <div className='flex justify-between gap-3 p-5'>
  <div className='w-[70%] bg-white rounded-3xl  '><Bids  handleHeart ={ handleHeart } heartMark={heartMark}  ></Bids></div>
      <div className='w-[30%] bg-white rounded-2xl'>
      <table className='table'>
<thead className='text-center'>
      <tr>
        <th>Favourites Items </th>
      </tr>
    </thead>
    <tbody className='text-center'>
      <tr><td className=''> <h3 className='font-bold'>No Favourites yet</h3>
        <p className='text-sm'>Click the heart icon on any item to add it to your favorites</p>
        {
          heartMark.map((marked)=> <p>{marked.item}</p>)
        }
      </td>
      </tr>
      <tr><td className='font-bold'> <p>Total bids Amount :$0000</p> </td></tr>

    </tbody>
</table>
      </div>
    </div>
    </div>
    <div><Footer></Footer></div>
   </div>
   
    </>
  )
}

export default App
