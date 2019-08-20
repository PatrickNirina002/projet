import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Chacun from './components/chacun';
import PostFrontToBack from './components/postWithUpload_frontToBack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inscrire from './components/inscrire';
import Modifier from './components/update';

import Bienvenue from './components/bienvenue';
import Vide from './components/bienvenue';
import PrivateRoute from './components/cahe';
import Prof from './components/profi';
import Photo from './components/photo';
import AffPhoto from './components/affichePhoto';
import AffichePho from './components/affichePho';
import ModifPho from './components/modifPho';
// import Gest from './components/gest';
import Index from './components/affichegest';
// import Slider from './components/slider'
//import Admin from './components/Admin';
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
             
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/atelier" component={ PostFrontToBack } />
                  
                  <Route path="/particulier/:_id"  component={Inscrire} />
                  <Route path="/profil/:_id"  component={Modifier} />
                  <Route exact path="/register/:_id" component={ Chacun } />
                  <Route exact path="/bienvenue"  component={Vide} />
                  <switch>
                    <PrivateRoute exact path="/admin"  component={Vide} />
                    
                  </switch>
                  <Route exact path="/prof/:_id" component={ Prof } />
                  <Route exact path="/photo/:_id" component={ Photo } /> 
                  <Route exact path="/affichephoto/:_id" component={ AffPhoto } />
                  <Route exact path="/affichepho/:_id" component={ AffichePho } />
                  <Route path="/profi/:_id"  component={ModifPho} />
                 
                  <Route exact path="/affichegestion/:_id" component={ Index } />
                  {/* <Route path="/dash"  component={Admin} ></Route> */}
                </div>
              
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
