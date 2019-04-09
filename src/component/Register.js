import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            feedback: ''
        }
    }

    onEmailChange    = (event) => this.setState({ email: event.target.value });
    onPasswordChange = (event) => this.setState({ password: event.target.value }); 
    

    onRegisterClicked = () => {
        this.setState({feedback: ''})
        fetch('https://guarded-falls-94772.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log("backend feedback ",result);
            if(result.email){
                console.log('registered!')
                this.props.loginRecieved(result)
            } else {
                console.log("wrong redentials...")
            }
        })
        .catch(err => {
            this.setState({feedback: 'wrong credentials'})
            console.log(err)
        })
        
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>

                <font size="5" color="grey">Register page</font>
                <br/>
                <br/>
                <br/>

                <Container>
                <Row className="justify-content-md-center">
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.onEmailChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.onRegisterClicked}>
                        Submit
                    </Button>
                    </Form>
                </Row>
                </Container>

                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Register;