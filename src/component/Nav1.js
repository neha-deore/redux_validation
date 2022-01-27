import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default function Nav1() {
    return (
        <div>


            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link ><Link to='/counter'>counter</Link> </Nav.Link>
                        <Nav.Link ><Link to='/details'>User Details</Link> </Nav.Link>
                        <Nav.Link ><Link to='/countrydetails'>Country details</Link></Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
