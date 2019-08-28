import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import {Link } from 'react-router-dom';
import Inscrire from './inscrire';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Slider from './slider';
import Seul from './affsel';
import { connect } from 'react-redux';
class Affdesc extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };
        

    }
    componentDidMount() {
        axios.get('http://localhost:8080'+this.props.location.pathname)
            .then(response => {
                console.log(response.data);
                this.setState({ profil: response.data });
                localStorage.setItem('atelier',response.data._id)
            })
            .catch(function (error) {
                console.log(error);
            })
        
                if(this.props.auth.isAuthenticated==false) {
                    
                }
                else{
                    this.props.history.push('/admin');
                }
            
        

    }

    liste() {
        return <div className="row">
      
<div className="col-md-8">
        
     
      
   
      
          <div className="container cart">
          <div class="card card-cascade narrower">  
          
<div class="card-body card-body-cascade">      
          <div class="row">
                
          {
              (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                //   (this.state.profil.length > 0) ? (this.state.profil.filter((params)=>params.visibilite).map((obj) => {
                  return (
                      
<div class="col-md-12 carde">







<h5 class="pink-text pb-2 pt-1"><i ></i> {obj.titre}</h5>
<p class="card-text">{obj.description}</p>




</div>


)



              })) : ('')
          }
  
</div>
</div>
</div>
          </div>

      




          </div>
          <div className="col-md-4">
          <Route exact path="/affdescription/:_id" component={ Seul } />
          </div>
        </div>
    }
    render() {
        return (
            <div >
                {this.liste()}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
  })
  
  export  default connect(mapStateToProps)(Affdesc)