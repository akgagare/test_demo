import React from 'react'
import "./Project_3.css"
const Project_3 = () => {
  return (
    <div className='main'>
        
        <div className='nav flex justify-between items-center'>
            <div className="nav-part-1 flex pl-6">
                <div className="gola rounded-full text-2xl bg-black h-6 w-6"></div>
                <div className="gola rounded-full text-2xl bg-black h-6 w-6"></div>
            </div>
            <div className="nav-part-2 flex gap-6 pr-4 text-xl text-gray-500">
                <h4>EN <span>RN</span></h4>
                <h4>Country : Russia</h4>
                <h4>Profie</h4>
                <h4>Wishlist</h4>
                <h4>Search</h4>
            </div>
        </div>
        <div className="nav2 flex gap-5 text-2xl pl-2 items-center h-[40px] font-medium overflow-hidden relative">
            <marquee className="animate-marquee whitespace-nowrap flex ">
                <h4>SUN</h4>
                <h4>OPTICAL</h4>
                <h4>COLLECTIONS</h4>
                <h4>STUDIO</h4>
                <h4>ABOUT</h4>
                <h4>SHOPS</h4>
                <h4>JOURNAL</h4>
            </marquee>
        </div>

        <div className="content  w-[100%] mt-4">
            <div className="text-content flex h-[50%] w-[100%]  flex-nowrap">
                <div className="elem  w-[50%] h-[100%] border-2 flex-shrink-0  hover:bg-yellow-200 transition duration-700">
                    <div className='header flex p-3 '>
                        <h1 className='font-extrabold'>02</h1>
                        <h2 className="font-light ml-4">lookbook</h2>
                    </div>
                    <h2 className='text-[80px] ml-32'>Trendline</h2>
                </div>
                <div className="elem   w-[50%] h-[100%] border-2  flex-shrink-0  hover:bg-yellow-200 transition duration-700">
                <div className='header flex p-3'>
                        <h1 className='font-extrabold'>03</h1>
                        <h2 className="font-light ml-4">silbook</h2>
                    </div>
                    <h2 className='text-[80px] ml-32'>Blender</h2>
                </div>
                <div className="elem   w-[50%] h-[100%] border-2  flex-shrink-0  hover:bg-yellow-200 transition duration-700">
                <div className='header flex p-3'>
                        <h1 className='font-extrabold'>04</h1>
                        <h2 className="font-light ml-4">macbook</h2>
                    </div>
                    <h2 className='text-[80px] ml-32'>Booking</h2>
                </div>
            </div>
            
            <div className='image-content flex'>
                <img src='https://media.istockphoto.com/id/1149623568/photo/portrait-of-a-senior-businessman.jpg?s=612x612&w=0&k=20&c=6UQUv_iKZ6vybkDJnZ70dKVCHxbRiKPW00feB4xNl94='/>
                <img src='https://media.istockphoto.com/id/679524804/photo/thoughtful-businessman-standing-against-wall.jpg?s=612x612&w=0&k=20&c=gTRmMEUrKu-bDKEm2DAB2QZuCpM0U4ak_anFzIJ1O_Y='/>
                <img src='https://media.istockphoto.com/id/1474128896/photo/senior-businessman-with-crossed-arms-in-the-office.jpg?s=612x612&w=0&k=20&c=RfrWcHeEFZXdtaRtJYhu5zBK0hXvoiT_e1b9c7IvtDc='/>

            </div>
        </div>

        

    </div>
  )
}

export default Project_3
