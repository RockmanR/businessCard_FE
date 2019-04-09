import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


class UserPagePersonal extends React.Component{
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

    onProfilePicChange  = (event) => this.setState({ profilePic: event.target.value });
    onEmailChange       = (event) => this.setState({ email: event.target.value });
    onPasswordChange    = (event) => this.setState({ password: event.target.value }); 
    onPublicNameChange  = (event) => this.setState({ publicName: event.target.value }); 
    onOccupationChange  = (event) => this.setState({ occupation: event.target.value }); 
    onInterestsChange   = (event) => this.setState({ interests: event.target.value }); 
    onWebsiteChange  = (event) => this.setState({    website: event.target.value }); 
    onLinkedInChange = (event) => this.setState({    linkedIn: event.target.value }); 
    onFacebookChange = (event) => this.setState({    facebook: event.target.value }); 
    onAddress1Change = (event) => this.setState({    address1: event.target.value }); 
    onAddress2Change = (event) => this.setState({    address2: event.target.value }); 
    onPOBoxChange    = (event) => this.setState({    pobox: event.target.value }); 
    onContact1Change = (event) => this.setState({    contact1: event.target.value }); 
    onContact2Change = (event) => this.setState({    contact2: event.target.value }); 

    onUpdateClicked = () => {
        console.log('state is: ', this.state)
        this.setState({feedback: ''})
        fetch('https://guarded-falls-94772.herokuapp.com/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                profilePic: this.state.profilePic,
                email: this.state.email,
                password: this.state.password,
                publicName: this.state.publicName,
                occupation: this.state.occupation,
                interests: [this.state.interests],
                website: this.state.website,
                linkedIn: this.state.linkedIn,
                facebook: this.state.facebook,    
                address1: this.state.address1,
                address2: this.state.address2,
                pobox: this.state.pobox,
                contact1: this.state.contact1,
                contact2: this.state.contact2    
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log("backend feedback: ",result);
            if(result.email){
                this.props.refreshUser()
                this.props.loginRecieved(result)
            } 
        })
        .catch(err => {
            this.setState({feedback: 'wrong data sent'}) // this field is used to desplay it for the user (but not reflected in the HTML yet)
            console.log(err)
        })
        
    }

    render(){

        return(
            <div>
                <br/>
                <br/>
                <br/>
                <font size="5" color="grey">My Acccount</font>
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

                    <Row>

                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Col md={15}>
                            <Form.Control plaintext defaultValue={this.state.profilePic} className="border" onChange={this.onProfilePicChange}/>
                            </Col>
                        </Form.Group>
                        </Form>
                    </Row>

                    <Row>
                    <Col xs={6} md={4}>
                        <ButtonToolbar>
                            <Button  variant="outline-secondary" size="sm" type="submit">Upload picture</Button>..
                            <Button  variant="outline-danger" size="sm" type="submit">Remove picture</Button>
                        </ButtonToolbar>    
                        </Col>
                        <Col xs={6} md={4}>
                        </Col>
                    </Row>

                    <br/>
                    <br/>
                    <br/>



                    <font size="4" color="grey">Login Details</font>
                    <hr/><br/>

                    <Form >
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        email:
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext defaultValue={this.state.email} className="border" onChange={this.onEmailChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        password: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext defaultValue={this.state.password} className="border" onChange={this.onPasswordChange}/>
                        </Col>
                    </Form.Group>
                    </Form>

                    <br/>
                    <br/>
                    <br/>



                    <font size="4" color="grey">My Info</font>
                    <hr/><br/>

                    <Form >

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Public name:
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.publicName} onChange={this.onPublicNameChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Ocupation: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.occupation} onChange={this.onOccupationChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Interests: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.interests} onChange={this.onInterestsChange}/>
                        </Col>
                    </Form.Group>

                    </Form>

                    <br/>
                    <br/>
                    <br/>                    

                    <font size="4" color="grey">My External Links</font>
                    <hr/><br/>

                    <Form >

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Website:
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.website} onChange={this.onWebsiteChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        linkedIn: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.linkedIn} onChange={this.onLinkedInChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Facebook: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.facebook} onChange={this.onFacebookChange}/>
                        </Col>
                    </Form.Group>

                    </Form>

                    <br/>
                    <br/>
                    <br/>                    

                    <font size="4" color="grey">My Address</font>
                    <hr/><br/>

                    <Form >

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Address 1:
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.address1} onChange={this.onAddress1Change}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Address 2: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.address2} onChange={this.onAddress2Change}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        POBox: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.pobox} onChange={this.onPOBoxChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Contact 1: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.contact1} onChange={this.onContact1Change}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Contact 2: 
                        </Form.Label>
                        <Col xs="4">
                        <Form.Control plaintext className="border" defaultValue={this.state.contact2} onChange={this.onContact2Change}/>
                        </Col>
                    </Form.Group>

                    </Form>

                    <br/>
                    <br/>
                    <br/>

                    <ButtonToolbar>
                        <Button  variant="primary" size="sm" type="submit" onClick={this.onUpdateClicked}>Update records</Button>..
                        <Button  variant="outline-danger" size="sm" type="submit">Revert changes</Button>
                    </ButtonToolbar> 

                    <br/>
                    <br/>
                    <br/>


                </Container>
            </div>
        )
    }
}

export default UserPagePersonal;