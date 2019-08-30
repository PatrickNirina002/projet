import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import {Link } from 'react-router-dom';
import Inscrire from './inscrire';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ImageAdmin from './affdescriptionAdm';
import DescriUpd from './descriptionModifier';
import Seul from './affsel';
import { connect } from 'react-redux';
 class DescriptionAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };
        

    }
    componentDidMount() {
        axios.get('https://finaly-s.herokuapp.com'+this.props.location.pathname)
            .then(response => {
                console.log(response.data);
                this.setState({ profil: response.data });
                localStorage.setItem('atelier',response.data._id)
            })
            .catch(function (error) {
                console.log(error);
            })

            if(this.props.auth.isAuthenticated==false) {
                this.props.history.push('/login');
            }
            else{
              
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




<div className="row">
<div className="col-md-10"><h5 class="pink-text pb-2 pt-1"><i ></i> {obj.titre}</h5></div>
<div className="col-md-2"><div class="dropdown">
  <h3 class="dropbtn">...</h3>
  <div class="dropdown-content">
  <div className="col-md-6"><a  className="h"  onClick={()=>{
    console.log(obj._id);
    localStorage.setItem('idDesc',obj._id)
    localStorage.setItem('titre',obj.titre)
    confirmAlert({
    customUI: ({ onClose }) => {
    return (
    <div className='custom-ui'>
          
        <div class="card card-cascade wider reverse">
        <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-3"><button onClick={onClose} className="ferme">X</button></div>
        </div>
        <div class="view view-cascade overlay">       
        </div>       
        <div class="card-body card-body-cascade "> 
        <p class="card-text">
        <DescriUpd/>      
        </p>    
        </div>
        
        </div>
       
    </div>
    
    
    );
    }
    });
    
    }}> Modifier</a>
    <a onClick={()=>{
        confirmAlert({
            customUI: ({ onClose }) => {
            return (
            <div className='custom-ui'>
                  
                <div class="card card-cascade wider reverse">
                <div className="row">
                <div className="col-md-8"></div>
                <div className="col-md-4"><button onClick={onClose} className="ferme">X</button></div>
                </div>
                <div class="view view-cascade overlay">       
                </div>       
                <div class="card-body card-body-cascade "> 
                <p className="li">cliquez ok pour supprimer</p>
                <p class="card-text">
                <button onClick={()=>{
                    axios.delete('https://finaly-s.herokuapp.com/delete/'+obj._id)
                }} className="btn btn-danger">Ok</button>    
                </p>    
                </div>
                
                </div>
               
            </div>
            
            
            );
            }
            });

        
    }}
    >supprimer</a>
    </div>
  </div>
</div></div></div>
<p class="card-text">{obj.description}</p>




</div>


)



              })) : (<div className="videbe"></div>)
          }
  
</div>
</div>
</div>
          </div>

      




          </div>
          <div className="col-md-4 fixe">
          <Route exact path="/descriptionAd/:_id" component={ ImageAdmin } />
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
  
  export  default connect(mapStateToProps)(DescriptionAdmin)