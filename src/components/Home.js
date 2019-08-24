
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import {Link } from 'react-router-dom';
import Inscrire from './inscrire';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './home.css'
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };
        

    }
    componentDidMount() {
        axios.get('http://localhost:8080/affichertous')
            .then(response => {
                console.log(response.data);
                this.setState({ profil: response.data });
                localStorage.setItem('atelier',response.data._id)
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            //(this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                (this.state.profil.length > 0) ? (this.state.profil.filter((params)=>params.visibilite).map((obj) => {
                                return (
 




<div class="container">
<div class="row "></div>
<div class="row mb-5">
    
   
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
        <div class="card card-inverse card-info">
            <img class="card-img-top" src={'http://localhost:8080/user/'+obj.image} alt="pdp"/>
            <div class="card-block">
                <figure class="profile profile-inline">
                    <img src={'http://localhost:8080/user/'+obj.image}  class="profile-avatar" alt=""/>
                </figure>
                <h4 class="card-title">{obj.titre}</h4>
                <div class="card-text">
                {obj.description}
                </div>
                <div class="card-text">
                {obj.prix}
                </div>
            </div>
            <div class="card-footer">
                <small>Last updated 3 mins ago</small>
              
                <button class="btn btn-info float-right btn-sm" onClick={()=>{
                    console.log(obj._id);
                    localStorage.setItem('ti',obj._id)
                    localStorage.setItem('titre',obj.titre)
                    confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className='custom-ui'>
                    <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2"><button onClick={onClose}>X</button></div>
                    </div>
                      <Inscrire/>
                    </div>
                  );
                }
              });
              
                }}>  S'inscrire </button>
            </div>
        </div>
    </div>
   
</div>
</div>








)



                            })) : ('')
                        }
                
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