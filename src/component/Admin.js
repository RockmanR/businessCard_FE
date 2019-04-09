import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import List from './List'

class Admin extends React.Component{

    render(){

        return(
            <div>
                <br/>
                <br/>
                <br/>
                <font size="5" color="grey">Full User List</font>
                <br/>
                <br/>
                <br/>
                <Container>
                    <Form>
                        {this.props.fullUserList.map(user => <List key={user._id} user={user} refreshUser={this.props.refreshUser}></List>)}
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Admin;