import React from 'react';
import { Image } from './Image';
import { Nav, Navbar as _navbar }  from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import {PageHome} from './PageHome';
import './Navbar.css';

export class Navbar extends React.Component {

    render() {
        return (
            <Router>
                <div className="navbar">
                    <_navbar collapseOnSelect="true" bg="dark" fixed="top" variant="dark" expand="lg">
                        <_navbar.Brand href="#">
                            <Image src="./xanalogo.png" width={75} height={50} alt="logo" handleClick={() => ({})}/>
                            {" "} XANA NFT
                        </_navbar.Brand>

                        <_navbar.Toggle aria-control="responsive-navbar-nav"/>
                        <_navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            </Nav>
                        </_navbar.Collapse>
                    </_navbar>
                    
                </div>
                <div className="routes">
                    <Routes>
                        <Route path="/" element= {<PageHome />} />
                        <Route path="/home" element={<PageHome />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}