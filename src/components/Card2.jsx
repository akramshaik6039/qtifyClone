import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



export default function Card2(api) {
    let navigate = useNavigate()
    let [news, setNews] = useState([])
    useEffect(() => {
        fetch(api.api).then(x => x.json()).then(x => setNews(x))
    }, [api.api])

    return (
        <div style={{ backgroundColor: "black", padding: "50px 50px 50px 100px" }} className='container-fluid'>
            <h5 style={{ color: 'white' }}>New Albums</h5>
            <Carousel>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', }}>
                    {news.slice(0, 6).map(x => {
                        return (
                            <>
                                <div key={x.id}>
                                    <Card onClick={() => navigate(`/info2/${x.title}`, { state: { x } })} style={{ width: '12rem', backgroundColor: '#34c94b' }}>
                                        <Card.Img height='200px' variant="top" src={x.image} />
                                        <Card.Body>
                                            <Card.Title style={{ backgroundColor: 'black', color: "white", borderRadius: "5px" }}>{x.title}</Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                    <h5 style={{ color: 'white' }}>{x.title}</h5>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                    {news.slice(6, 11).map(x => {
                        return (
                            <>
                                <div key={x.id}>
                                    <Card onClick={() => navigate(`/info2/${x.title}`, { state: { x } })} style={{ width: '12rem', backgroundColor: '#34c94b' }}>
                                        <Card.Img height='200px' variant="top" src={x.image} />
                                        <Card.Body>
                                            <Card.Title style={{ backgroundColor: 'black', color: "white", borderRadius: "5px" }}>{x.title}</Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                    <h5 style={{ color: 'white' }}>{x.title}</h5>
                                </div>
                            </>
                        )
                    })}
                </div>

            </Carousel>
        </div>
    )
}
