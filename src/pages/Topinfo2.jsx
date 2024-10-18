import React from 'react'
import Nav1 from '../components/Nav1'
import { useLocation } from 'react-router-dom'
import Fotter from '../components/Fotter';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Topinfo2() {
  let navigate=useNavigate()
    let loc=useLocation()
    console.log(loc);
    let topinner2=loc.state

    let totaldata=10;
    let totalPages=Math.ceil(topinner2.x.songs.length/totaldata)
    
    let [page,setPage]=useState(1)
    function inc(){
      setPage(page+1)
    }
    function dec(){
      setPage(page-1)
    }
    function pagination(){
      let firsti=(page-1)*totaldata;

      let lasti=firsti+totaldata;
      return  topinner2.x.songs.slice(firsti,lasti)
    }
  return (
    <div style={{backgroundColor:'black',height:'100vh'}}>
      <Nav1/>
      <button onClick={()=>navigate('/')} style={{marginTop:"50px"}} className='pagebtn'>back</button>
      <div style={{color:'white',height:"500px",padding:'30px',alignItems:'center',justifyContent:'space-around'}} className='container d-flex h-500'>
        <div >
            <img style={{width:'300px',height:'300px',marginRight:'20px'}}  src={topinner2.x.image} alt="" />
        </div>
        <div>
            <h1>{topinner2.x.title}</h1>
            <p>{topinner2.x.description}</p>
        </div>
      </div>

      <div className='paginate'>
      <button className='pagebtn' onClick={dec} disabled={page===1} >prev</button>
      <p style={{color:'white'}}>{page} of {totalPages}</p>

      <button className='pagebtn' onClick={inc} disabled={page===totalPages}>next</button>
      </div>

      <div style={{backgroundColor:"black",color:'white',padding:'50px'}}>

<table border='' className='tb' >
  <thead >
    <tr style={{color:'white',backgroundColor:'#34c94b',height:'50px'}}>
     <th>Title</th>
     <th>Artist</th>
     <th>Duration</th>
    </tr>
  </thead>
  <tbody >
    {pagination().map(x=>{
      return(
        <tr className='tbo' key={x.id}>
          <td><img style={{width:'50px',height:'50px'}} src={x.image} alt="" />{x.title}</td>
          <td>{x.artists[0]}</td>
          <td>{x.durationInMs}</td>
        </tr>
      )
    })}
  </tbody>
</table>
</div>
      <Fotter/>
    </div>
  )
}
