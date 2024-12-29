import React from 'react'
import "./Project_2.css"
const Project_2 = () => {
  return (
    <div id='main' className='flex pt-32 mb-12 justify-between'>
        <div id="text-content" className='flex flex-col pl-4'>
            <div id="text-box-1" className='text-9xl leading-[6rem] mb-10'>
                <p className=''>a cotton <br></br>weave.</p>
            </div>
            <div id="text-box-2" className=''>
                <div id="button-tag" className='flex justify-evenly mb-7'>
                    <h3 className='mr-4'>colors</h3>
                    <div className="w-4 h-4 border-2px rounded-full bg-black "></div>
                    <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                </div>
                <div id="details">  
                    <h2 className='text-3xl font-bold'>Details</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Excepturi quasi laborum sapiente vel molestias consectetur? Obcaecati<br/> ab tenetur facere inventore.</p>
                </div>
            </div>
        </div>
        <div id="img-content" className=''>
            <div id='textual' className='flex justify-between p-2 ml-[21.5rem] w-[24rem]'>
                <h3>$488</h3>
                <h2>Rating...</h2>
            </div>
            
            <div className='design flex'>
                <h2 className='rotate-90  mr-[14rem] mb-10'>Buy it or regret it</h2>
                <img src='https://images.unsplash.com/photo-1679217125041-6f81624038d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D' className='h-[35rem]'></img>
                <div className="flex h-20 w-20 border-none bg-black rounded-full items-center justify-center mt-[10rem]">
                    <h2 className='text-white'>add to bag</h2> 
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Project_2
