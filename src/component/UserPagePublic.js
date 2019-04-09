import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'


class UserPagePublic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            feedback: '',
            profilePic: this.props.user.profilePic,
            email: this.props.user.email,
            password: this.props.user.password,
            publicName: this.props.user.publicName,
            occupation: this.props.user.occupation,
            interests: [this.props.user.interests],
            website: this.props.user.website,
            linkedIn: this.props.user.linkedIn,
            facebook: this.props.user.facebook,
            address1: this.props.user.address1,
            address2: this.props.user.address2,
            pobox: this.props.user.pobox,
            contact1: this.props.user.contact1,
            contact2: this.props.user.contact2
        }
    }



    render(){

        return(
            <div>
                <br/>
                <br/>
                <br/>
                <font size="5" color="grey">User Acccount</font>
                <br/>
                <br/>
                <br/>

                <Container>

                    <Row >
                        <Col xs={6} md={4}>
                        Profile picture:
                        <br/><br/>                 
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                        <Image src={this.state.profilePic} width={128} rounded />
                        <br/><br/>
                        </Col>
                    </Row>

                    <br/>
                    <br/>
                    <br/>

                    <font size="4" color="grey">Personal Info</font>
                    <hr/><br/>

                    <Form >

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Name:
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control readOnly className="border" defaultValue={this.state.publicName} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Ocupation: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.occupation} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Interests: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.interests} />
                        </Col>
                    </Form.Group>

                    </Form>

                    <br/>
                    <br/>
                    <br/>                    

                    <font size="4" color="grey">External Links</font>
                    <hr/><br/>

                    <Form >

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Website:
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.website} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        linkedIn: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.linkedIn} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Facebook: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.facebook} />
                        </Col>
                    </Form.Group>

                    </Form>

                    <br/>
                    <br/>
                    <br/>                    

                    <font size="4" color="grey">Address</font>
                    <hr/><br/>

                    <Form >

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Address 1:
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.address1} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Address 2: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.address2} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        POBox: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.pobox} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Contact 1: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.contact1} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Contact 2: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext readOnly className="border" defaultValue={this.state.contact2} />
                        </Col>
                    </Form.Group>

                    </Form>

                    <br/>
                    <br/>
                    <br/>


                </Container>
            </div>
        )
    }
}

export default UserPagePublic;