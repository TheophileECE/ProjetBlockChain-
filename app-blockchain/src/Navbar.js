import React from 'react';
import { Image } from './Image';
import { Nav, Navbar as _navbar }  from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Button } from './Button.js';
import PageHome from './PageHome';
import PageInfos from './PageInfos';
import './Navbar.css';

export class Navbar extends React.Component {

    render() {
        return (
            <Router>
                <div className="navbar">
                    <_navbar collapseOnSelect="true" bg="warning" fixed="top" variant="light" expand="lg">
                        <_navbar.Brand href="#">
                            <Image src="./Commune/19.png" width={50} height={50} alt="logo" handleClick={() => ({})}/>
                            {" "} XANA NFT
                        </_navbar.Brand>

                        <_navbar.Toggle aria-control="responsive-navbar-nav"/>
                        <_navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/pageInfos">PageInfos</Nav.Link>
                            </Nav>
                        </_navbar.Collapse>
                    </_navbar>
                    
                </div>
                <div className="routes">
                    <Routes>
                        <Route path="/" element= {<PageHome />} />
                        <Route path="/home" element={<PageHome />} />
                        <Route path="/pageInfos" element={<PageInfos />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}