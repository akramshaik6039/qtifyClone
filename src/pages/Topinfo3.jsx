import React from 'react'
import Nav1 from '../components/Nav1'
import Fotter from '../components/Fotter'
import { useLocation } from 'react-router-dom'
export default function Topinfo3() {
    let topinner1=useLocation()
    let topinner2=topinner1.state
    
  return (
    <div style={{backgroundColor:'black',height:'100vh'}}>
     <Nav1/>
     <div style={{color:'white',height:"500px",padding:'30px',alignItems:'center',justifyContent:'space-around'}} className='container d-flex h-500'>
        <div >
            <img style={{width:'300px',height:'300px',marginRight:'20px'}}  src={topinner2.x.image} alt="" />
        </div>
        <div>
            <h1>{topinner2.x.title}</h1>
            <p>artists:{topinner2.x.artists}</p>
            <p>Likes:{topinner2.x.likes}</p>
        </div>
      </div>
     <Fotter/>
    </div>
  )
}
