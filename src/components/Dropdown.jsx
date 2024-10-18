import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Dropdown1() {
  return (
    <div style={{boxShadow:'0px 0px 1px 1px #34c94b',backgroundColor:'black',height:'400px',display:'flex',flexDirection:"column",justifyContent:"center",gap:'60px',alignItems:'center'}}>
        <h1 style={{color:'#34c94b'}}>FAQS</h1>
       <Dropdown className='drop'>
      <Dropdown.Toggle className='drop1' style={{border:'solid white'}} variant="dark" id="dropdown-basic">
      Is QTify free to use?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  style={{width:"700px"}} className='drop2' href="#/action-1">Yes! It is 100% free, and it has 0% ads!

</Dropdown.Item>
       
      </Dropdown.Menu>
     
    </Dropdown>
    <Dropdown className='drop'>
    <Dropdown.Toggle className='drop1' variant="dark" style={{border:'solid white'}} id="dropdown-basic">
      Can I download and listen to songs offline?


      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className='drop2' style={{width:"700px"}} href="#/action-1">Sorry, unfortunately we don't provide service to download any songs.

</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
