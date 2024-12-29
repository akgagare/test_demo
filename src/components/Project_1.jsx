import React from 'react'
import "./Project_1.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors';
const Project_1 = () => {
  return (
    <div className='main'>
      <div className="nav flex justify-end gap-5 text-xl h-20  pr-10 items-center ">
        <h2>About</h2>
        <h2>News</h2>
        <h2>Calt</h2>
        <ShoppingCartIcon style={{ fontSize: '35px',color:"white",background:"black", borderRadius:"50%", padding:"4px"}}/>
      </div>
      <div className="box-1 text-4xl font-bold ml-24 mb-32 w-[50%]">
        Lorem ipsum dolor, <br></br>sit amet consectetur adipisicing elit.
      </div>
      <div className ="flex  justify-between">
       <div className="content w-1/3 ml-24 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel itaque ducimus cum amet voluptatum illo iure architecto explicabo, repellat eius odit suscipit inventore mollitia, pariatur consectetur alias reprehenderit, eos autem ipsam. Quibusdam temporibus doloremque odio iure nobis aliquam quo.
       </div>
       <div className="pr-6">
          <div className="elem mb-3">
            <hr className='bg-black h-1 w-[200px] border-none '/>
            <a href="https://www.google.com" className='hover:underline'>Contact</a>
          </div>
          <div className="elem mb-3 mt-2">
            <hr className='bg-black h-1 w-[200px] border-none'/>
            <a href="#" className='hover:underline'>View Product</a>
          </div>
          <div className="elem mb-3 mt-2">
            <hr className='bg-black h-1 w-[200px] border-none'/>
            <a href="#" className='hover:underline'>About</a>
          </div>
       </div>
       
 
      </div>
      <div className="bottom">
        <img src='https://images.unsplash.com/photo-1679217121311-cdba4c533593?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D'></img>
      </div>
    </div>
  )
}

export default Project_1
