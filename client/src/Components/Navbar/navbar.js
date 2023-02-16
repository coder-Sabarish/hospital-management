import React from "react";
import { Container , Navbar ,Nav } from 'react-bootstrap';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Bookingform from "./../../Pages/Booking/Booking";

const App=()=>{
    const navigate = useNavigate();
    const menuData=[
        {
            path:'/',
            name:"Home"
        },
        {
            path:'/about',
            name:"About"
        },
        {
            path:'/department',
            name:"Department"
        }

    ]

    const logOut = () => {
        localStorage.removeItem("userProfile");
        navigate("/login");
    }

    return(
        <>
        <Navbar bg="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="/home" className="brand">KEC Hospital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            menuData.map((item)=>(
                                <Nav.Link href={item.path}>
                                    <div className="list_item">{item.name}</div>
                                </Nav.Link>
                            ))
                        }
                        
                    </Nav>
                    <Nav className="ms-auto p-1 d-inline-block">
                        <Popup trigger=
                            {<button className="btn btn-success pop">Booking</button>}
                            modal nested>
                            {
                                <Bookingform/>
                            }
                        </Popup>
                        {/* <Popup trigger={<button className="btn btn-success pop">Booking</button>} position="bottom center"><Bookingform/></Popup> */}
                    </Nav>
                    <Nav className="ms-10">
                        <button className="btn btn-success" onClick={logOut}>Log out</button>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>
    )
}

export default App;