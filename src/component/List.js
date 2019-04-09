import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

class List extends React.Component{

    deleteAccount = () => {
        console.log('delete clicked');
        fetch('https://guarded-falls-94772.herokuapp.com/delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.props.user.email,
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log('backend response: ',result);
            if(result.n === 1){                           
                console.log('Account deleted')
                this.props.refreshUser()
            } else {
                console.log("Account was not deleted")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){

        return(
            <div>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        email:
                        </Form.Label>
                        <Col sm="2">
                        <Form.Control plaintext defaultValue={this.props.user.email} className="border"/>
                        </Col>
                        <Form.Label column sm="2">
                        password: 
                        </Form.Label>
                        <Col sm="2">
                        <Form.Control plaintext defaultValue={this.props.user.password} className="border"/>
                        </Col>
                        <Button variant="outline-danger" type="submit" onClick={this.deleteAccount}>Delete account</Button>
                </Form.Group>
            </div>
        )
    }
}

export default List;