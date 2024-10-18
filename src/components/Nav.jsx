import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards'
import Card2 from './Card2';
import Cards3 from './Cards3';
import Fotter from './Fotter';
import Dropdown1 from './Dropdown';
import { useNavigate } from 'react-router-dom';


export default function Nav() {
  let navigate=useNavigate()
    let [top,setTop]=useState([])
    let [bar,setBar]=useState([])
    let [search,setSearch]=useState('')
    let apis={
        top:'https://qtify-backend-labs.crio.do/albums/top',
        new:'https://qtify-backend-labs.crio.do/albums/new',
        songs:'https://qtify-backend-labs.crio.do/songs'
    }

    
    useEffect(()=>{
        fetch(apis.top).then(x=>x.json()).then(x=>setTop(x))
        .catch(err=>console.error('error',err))
    },[apis.top])

    
   function ser(e){
        setSearch(e.target.value)
        fetch(apis.top).then(x=>x.json()).then(x=>setBar(x))
   }
   
   
    
  return (
    <div>
     <Navbar className="navbar navbar-light   p-4" style={{backgroundColor:'#34c94b'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAkCAYAAADSO4eRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ/SURBVHgB5VnhedowED2c/i9NBsCZoDBBnAlCJ4g7QekEkAmaTICZIM0EOBNAJkATBBZI3HdwIoeQwRhIoHnfd0jySSf7dHc6iQoVQBU4OTmJsiy74CbKUFiTSqXyBBq+vLykE4COGJVVTOigHgTBNaoxN2k9ktfX1xvoxNARwqsMtgQooY1qy8OeCDFC8uP2+fn5Nx0ZlpQBPYRQRJ/Uh8ItUtADqn/dVWfrQVGHq7RBoWIZWMnlMVnJgjJcRUABBvQTH5RSAWB87CjlqBQyV4bHInr4kNamQZHlQBl/QE15xAppHFVwPT097YIyoYS2BMtQ8rp0BJhaBlYzEquYusZ4PD6nLcFBGNYxsC4j7pLSASPgH+QQbfsAyrikHYDdguONbXMsoQNHwD6Ol46knewy2LElQAkp11FGbIF0wIB3BLFtwJR7tGMgM71Rk0V0wAiwYhdSn+zJp4ckSRossE57BuaIQV2hcJOxX+wADpxnZ2csKISFcHI1zJlsmmRJ01g3cCFBOQKfcxVWBgfU77QF5F1jUMJyPfyu8C3Y0g0Vhdr+XGq5LwLqZ8sYuSuAse08ubQFZC7G2MNrqncag+43tYxgBU/vMCEK3nojTz/mDRwXiKkEWIaYOVPV4VXpLSGsunzn3RqwnB8+61mFVcrQk7XVi7DJc1Dkg5hRfe9V/5DKgbPWrtBXzcCH2XkNzy1tDeuCk02VYPFlXQflpxYNOxl4CYoBzT6e3YjPJgntCZDdQdFZ06102h8U6BOr+kLgktW5U/xrKgnJdWrqUYOfaXcQN4pUXjR1H2nrfvM+vjG58lYE0EwG9FVg8gms6sBVRGaOMvIQqT4jG7SdD/dhJPxb9azuzDmW59OjSBHL0AKWtluxDiNNVkyNysHQookbKrYtTjz99NhUPY9sRRRjrYnvagopY25+nqClJ7f4RiUA2Xw41C7HOcp5Xh6jxg1lrO1nZJw9Y+nxOs9ZWmRWhqHdIveuFKsxpHeGLGAqzaZizTNvq3BWxq7PI/qOdAFQxh19DB6k1G5sLePRdgpwcdshv0Lsixv7YEU8mJscm22OvB5S/IQ+BqmqX8oOVXd50zwDColxluDj9hXOE6y9R1ESgz8utIJAiZ5F8pCqFoyxLcgzuCe5Ap+v/XofebHDC5TJ+YhmSjCKnVJRQEhLbU19D/+X4se0BTC+o2TVPPyRu7UqXj+PJ3y7xY7UNy30LbKbJPQWA3hPv1YThPT234rZZ/a5A6RShqAr59kUa5XhyTKTbHYi5PODTcUZPVnZDpWHUfWIdovUI/uRygAfmWQFQSWR+bPJmuKPyrqJ08ci1PwibjIFLCRGwRe8e8sVZL93t99SSVwOHlR9WPZ0+64QC2Ha6TWhY3lH8V/O3pAtHtqa9JmhYg6jSp8N2ezOog8afHoX8exQoyznonjttd9/glTKJ9Bt3i7yDwI32xLUo15uAAAAAElFTkSuQmCC"
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
          <Form inline className=''>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={ser}
              style={{width:"400px"}}
            />
            
          </Col>
          <Col xs="auto">
            <Button type="submit" variant='light'><i className="fa-solid fa-magnifying-glass"></i></Button>
          </Col>
        </Row>
      </Form>
      <Button variant="dark">Feedback</Button>{' '}
        </Container>
      </Navbar>
      <div className='searchBar'>
        {search && bar.filter(x=>x.title.toLowerCase().includes(search)).map(x=>{
        
          return(
        <div onClick={()=>navigate(`/info/${x.title}`,{state:{x}})} style={{cursor:'pointer',display:"flex",justifyContent:"space-between",backgroundColor:"#34c94b",color:'black',alignItems:'center',padding:'10px'}}>
        <img style={{width:"70px",height:"70px",borderRadius:'10px'}} src={x.image} alt='img'></img>
        <h4>{x.title}</h4>
        <h4>{x.follows}</h4>
        </div>)})}</div>
    
    <div className='nav2'>
        <div style={{textAlign:'center'}}>
        <h1 className='nav2text'>100 Thousand Songs, ad free</h1>
        <h1 className='nav2text'>Over thousands podcast episodes</h1>
        </div>
        <div>
        <img src="https://qtify-venkykumar.netlify.app/static/media/headphone.66e109c97f55e2a35a02d810fa2b6650.svg" alt="" />
        </div>
    </div>
   


    <Cards search={search} top={top }/>
    <Card2 api={apis.new}/>
    <Cards3 api={apis.songs}/>
    <Dropdown1/>
    <Fotter/>
    </div>
    
  )
}
