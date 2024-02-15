import React, { useRef, useState } from 'react'

const Demo2 = () => {

  let x=0;
  const [y,setY]=useState(0);
  const z=useRef(0) //ref ={current:0} , on rerender ye yaad rakhega iska value unlike x jo wapas start hota hai 0 se


  return (
    <div className='m-4 p-2 flex bg-slate-100 border border-black w-96 h-96'>
      <div>
        <button className='bg-green-200 p-4 m-2' onClick={()=>{
          x=x+1;
          console.log("x=",x);
        }}>Increase x</button>
        <h1 className='font-bold text-xl ml-2'>let :{x}</h1>
      </div>
      <div>
        <button className='bg-red-500 p-4 m-2' onClick={()=>{
          setY(y+1)
        }}>Increase y</button>
        <h1 className='font-bold text-xl ml-2'>state :{y}</h1>
      </div>
      <div>
        <button className='bg-purple-500 p-4 m-2' onClick={()=>{
         z.current=z.current+1
         console.log("z= ",z.current);
        }}>Increase z</button>
        <h1 className='font-bold text-xl ml-2'>ref :{z.current}</h1>
      </div>
    </div>
  )
}

export default Demo2
