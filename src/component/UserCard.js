import React from 'react'
import Card from 'react-bootstrap/Card'


class UserCard extends React.Component {

    goToUser = () => {
        this.props.openPublicPage(this.props.user)  /////  there might be another way to do it
    }


    render(){


        return(
            <div>
                <Card style={{ width: '18rem', cursor: 'pointer' }} className="text-left p-1" onClick={this.goToUser}>
                    <Card.Img variant="top" src={this.props.user.profilePic} />
                    <Card.Body>
                        <Card.Title>{this.props.user.publicName}</Card.Title>
                        <Card.Text>
                        Occupation: {this.props.user.occupation} <br/>
                        Interests: {this.props.user.interests} <br/>
                        </Card.Text>
                        <Card.Link href={this.props.user.website}>Website</Card.Link>
                        <Card.Link href={this.props.user.linkedIn}>LinkedIn</Card.Link>
                        <Card.Link href={this.props.user.facebook}>Facebook</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default UserCard;