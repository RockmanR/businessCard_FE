import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NavBarTop extends React.Component {


    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" onClick={()=>{this.props.onRouteChange('dashBoard')}} >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#login" onClick={()=>{this.props.onRouteChange('login')}}>Login</Nav.Link>
                    <Nav.Link href="#register" onClick={()=>{this.props.onRouteChange('register')}}>Register</Nav.Link>
                    <Nav.Link href="#myAccount" onClick={()=>{this.props.onRouteChange('userPagePersonal')}}>My Account</Nav.Link>
                    <Nav.Link href="#Admin" onClick={()=>{this.props.onRouteChange('admin')}}>Admin</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBarTop;