import React from 'react';
import './App.css';
import NavBarTop from './component/NavBarTop';
import Login from     './component/Login';
import Register from  './component/Register';
import Admin from     './component/Admin';
import Dashboard from './component/Dashboard';
import UserPagePersonal from './component/UserPagePersonal';
import UserPagePublic from   './component/UserPagePublic';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        currentPage: 'dashBoard',       // to set the landing page at 'Dashboard' 
        user: '',                       // carries the data for the logged-in user
        //userRefreshed: false,           // this is like a swich to prevent continuous loop of retrieving a user.
        fullUserList: [],               // to hold the array of users/accounts coming from the Back-end server for the Dashboard and the Admin page
        clickedUser: {}                 // this will temporary hold one user record based on the clicked Card/profile from the dashboard
    }
    this.downloadFullUserList();        // to download the full user list at construction
  }

  refreshUser = () => {
    //this.setState( {userRefreshed: false} );    // we need to set 'userRefreshed' back to false in order to retreive the user list again
    this.downloadFullUserList();      // to refresh (redownload) the user list after an update to one user
  }

  downloadFullUserList = () => {                 // to get the full list of users at the Dashboard (landing) page from the Back-end server
    //if(this.state.userRefreshed === false){      // if we already downloaded the full user list, then we don't need to download them again.
      //this.setState( {userRefreshed: true} )
        console.log('downloading full user list');
        fetch('https://guarded-falls-94772.herokuapp.com/all', { // for local host: 'http://localhost:5000/all'  and for Heroku: 'https://guarded-falls-94772.herokuapp.com/all'
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(result => {
            if(result){                                     // (I think the check here can be improved)
                console.log('full user list received')
                this.setState( {fullUserList: result} )
            } else {
                console.log("didn't get full user list")
            }
        })
        .catch(err => {
            console.log(err)
        })
    //}
}

  loginRecieved = (user) => {
    this.setState({
        user: user, // bringing the whole user object
        currentPage: 'userPagePersonal'
    })
  }

  openPublicPage = (user) => {
    this.setState({
      clickedUser: user,
      currentPage: 'userPagePublic'
    })
  }

  onRouteChange = (newPage)=>{
    this.setState({
      currentPage: newPage,
    })
  }

  render() {
      var view;

      if(this.state.currentPage === 'admin'){
        if(this.state.user.accessRights === 'admin'){
          view = <Admin fullUserList={this.state.fullUserList} refreshUser={this.refreshUser}></Admin>;  
        } else {
          view = <Login onRouteChange={this.onRouteChange} loginRecieved={this.loginRecieved}></Login>;
        }
      } else if(this.state.currentPage === 'dashBoard'){
        view = <Dashboard fullUserList={this.state.fullUserList} openPublicPage={this.openPublicPage}></Dashboard>;  ///// do we need openPublicPage here?
      } else if(this.state.currentPage === 'userPagePublic'){
        view = <UserPagePublic user={this.state.clickedUser} ></UserPagePublic>;
      } else if(this.state.currentPage === 'login'){
        view = <Login loginRecieved={this.loginRecieved}></Login>;
      } else if (this.state.currentPage === 'register') {
        view = <Register loginRecieved={this.loginRecieved}></Register>;
      } else if (this.state.currentPage === 'userPagePersonal') {
          if(this.state.user === ''){
            view = <Login loginRecieved={this.loginRecieved}></Login>;
          } else {
            view = <UserPagePersonal user={this.state.user} refreshUser={this.refreshUser} loginRecieved={this.loginRecieved}></UserPagePersonal>;
          }
      } else {
        view = <h2>No page with that name</h2>
      };


    return (
      <div className="App">
        <NavBarTop onRouteChange={this.onRouteChange}></NavBarTop>
        <div className="Margin">
        {view}
        </div>
      </div>
    );
  }
}

export default App;
