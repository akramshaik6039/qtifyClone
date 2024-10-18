import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
    
export default function Cards({top}) {
   
    let navigate=useNavigate();

    
    
    
    
  return (
    <div className='topcards' style={{ padding:"110px 50px 10px 110px",backgroundColor:'black'}}>
        <h5 style={{color:'white'}}>Top Albums</h5>
       <Carousel className='caro'>
                <div style={{display:'flex',width:'100%',justifyContent:'space-around'  }}>
                   {top.slice(0,7).map(x=>{
                    return(
                        <>
                         <div>
                         <Card onClick={()=>navigate(`/info/${x.title}`,{state:{x}})} style={{ width: '11rem',backgroundColor:'#34c94b' }}>
                            <Card.Img  variant="top" height='200px' src={x.image}/>
                            <Card.Body>
                                <Card.Title style={{backgroundColor:'black',color:'white',borderRadius:'5px'}}>{x.follows}follows</Card.Title>
                                <Card.Text>
                              
                                </Card.Text>
                              
                            </Card.Body>
                            
                            </Card>
                            <h5 style={{color:'white'}}>{x.title}</h5>
                         </div>
                            
                            
                            
                        </>
                    )
                   })}
                </div>
                <div  style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
                   {top.slice(7,13).map(x=>{
                    return(
                        <>
                      
                             <div >
                             <Card onClick={()=>navigate(`/info/${x.title}`,{state:{x}})} style={{ width: '11rem',backgroundColor:'#34c94b' }}>
                            <Card.Img variant="top" height='200px' src={x.image} />
                            <Card.Body>
                            <Card.Title style={{backgroundColor:'black',color:'white',borderRadius:'5px'}}>{x.follows}follows</Card.Title>
                            <Card.Text>
                              
                                </Card.Text>
                               
                            </Card.Body>
                            </Card>
                            <h5 style={{color:'white'}}>{x.title}</h5>
                             </div>
                           
                            </>
                      
                    )
                   })}
                </div>
                
            </Carousel>
    </div>
  )
}
