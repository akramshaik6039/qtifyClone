import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Cards3(api) {
   
    let fet=api.api
    let  [data, setData] = useState([])
    let [search,setSearch]=useState('')
    useEffect(()=>{
        fetch(`https://qtify-backend-labs.crio.do/songs/`).then(x=>x.json()).then(x=>setData(x))
        .catch(err=>console.error('error',err)
        )
    },[])
    let navigate=useNavigate()
  
   
   
  return (
    <div className='container-fluid' style={{padding:"100px 70px 50px 100px",backgroundColor:"black",boxShadow:'0px 0px 1px 1px #34c94b'}}>
        <h3 style={{color:"#34c94b"}}>Songs</h3>
        <div style={{display:'flex',justifyContent:'space-around',width:'300px',color:'white'}}>
            <h5 style={{cursor:'pointer'}} onClick={()=>setSearch('')} >ALL</h5>
            <h5 style={{cursor:'pointer'}} onClick={()=>setSearch('rock')}>ROCK</h5>
            <h5 style={{cursor:'pointer'}} onClick={()=>setSearch('pop')}>POP</h5>
            <h5 style={{cursor:'pointer'}} onClick={()=>setSearch('jaz')}>JAZ</h5>
            <h5 style={{cursor:'pointer'}} onClick={()=>setSearch('blues')}>BLUES</h5>
        </div>
      <Carousel className='caro3'>
                            <div style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
                            {data.filter(x=>x.genre.key.toLowerCase().includes(search)).slice(0,10).map(x=>{
                                return(<>
                           <div>
                           <Card  style={{ width: '8rem' ,backgroundColor:'#34c94b'}} onClick={()=>navigate(`/info3/${x.title}`,{state:{x}})}>
                            <Card.Img  variant="top" src={x.image} />
                            <Card.Body>
                                <Card.Title>{x.likes}</Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <p style={{color:'white',fontSize:'13px',width:"8rem"}}>{x.title}</p> 
                            </div> 
                                </>)
                            })}
                            </div>
     <div style={{display:'flex',width:'100%',justifyContent:'space-around',}}>
     {data.filter(x=>x.genre.key.toLowerCase().includes(search)).slice(10,20).map(x=>{
                                return(<>
                            <div>
                            <Card style={{ width: '8rem',backgroundColor:'#34c94b' }} onClick={()=>navigate(`/info3/${x.title}`,{state:{x}})}>
                            <Card.Img variant="top" src={x.image} />
                            <Card.Body>
                                <Card.Title>{x.likes}</Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <p style={{color:'white',fontSize:'13px',width:"8rem"}}>{x.title}</p>   
                            </div>
                                </>)
                            })}

     </div>
     <div style={{display:'flex',width:'100%',justifyContent:'space-around',}}>
     {data.filter(x=>x.genre.key.toLowerCase().includes(search)).slice(20,30).map(x=>{
                                return(<>
                            <div>
                            <Card style={{ width: '8rem' ,backgroundColor:'#34c94b'}} onClick={()=>navigate(`/info3/${x.title}`,{state:{x}})}>
                            <Card.Img variant="top" src={x.image} />
                            <Card.Body>
                                <Card.Title>{x.likes}</Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <p style={{color:'white',fontSize:'13px',width:"8rem"}}>{x.title}</p>  
                                </div> 

                                </>)
                            })}

     </div>
     <div style={{display:'flex',width:'100%',justifyContent:'space-around',}}>
     {data.filter(x=>x.genre.key.toLowerCase().includes(search)).slice(30,40).map(x=>{
                                return(<>
                            <div>
                            <Card style={{ width: '8rem',backgroundColor:'#34c94b' }} onClick={()=>navigate(`/info3/${x.title}`,{state:{x}})}>
                            <Card.Img variant="top" src={x.image} />
                            <Card.Body>
                                <Card.Title>{x.likes}</Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <p style={{color:'white',fontSize:'13px',width:"8rem"}}>{x.title}</p>   
                            </div>

                                </>)
                            })}

     </div>
     <div style={{display:'flex',width:'100%',justifyContent:'space-around',}}>
     {data.filter(x=>x.genre.key.toLowerCase().includes(search)).slice(40).map(x=>{
                                return(<>
                            <div>
                            <Card style={{ width: '8rem',backgroundColor:'#34c94b' }} onClick={()=>navigate(`/info3/${x.title}`,{state:{x}})}>
                            <Card.Img variant="top" src={x.image} />
                            <Card.Body>
                                <Card.Title>{x.likes}</Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <p style={{color:'white',fontSize:'13px',width:"8rem"}}>{x.title}</p>   

                            </div>
                                </>)
                            })}

     </div>

      </Carousel>
    </div>
  )
}
