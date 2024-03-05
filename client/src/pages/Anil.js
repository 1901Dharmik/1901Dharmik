import React, { useState } from 'react'

const Anil = () => {
    const [show, setShow] = useState(true);
  return (
    <div>{
      show?<h1>hello world !</h1>:null
    }
      {/* <button className='p-2 border-spacing-1' onClick={()=>{setShow(true)}}>show</button>
      <button className='p-2 border-spacing-1' onClick={()=>{setShow(false)}}>hide</button> */}

<button onClick={()=>setShow(!show)} >Toggle</button> 
    </div>
  )
}

export default Anil
