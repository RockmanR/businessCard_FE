import React from 'react'
import UserCard from './UserCard'
import CardDeck from 'react-bootstrap/CardDeck'


class Dashboard extends React.Component {

    render(){

        return(
            <div>
                <br/>
                <br/>
                <br/>
                <h2>This Is The Dashboard</h2>
                <br/>
                <br/>
                <br/>
                
                <div style={{ overflowY: 'scroll', border: '1px solid white', height : '700px'}} >
                    <CardDeck>
                    {this.props.fullUserList.map( (user, i) => {
                        return <UserCard key={i} user={user} openPublicPage={this.props.openPublicPage}></UserCard>
                    })}
                    </CardDeck>
                </div>
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Dashboard;