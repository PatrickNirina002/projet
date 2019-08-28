
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import {Link } from 'react-router-dom';
import Inscrire from './inscrire';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

 export default class ImageAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };
        

    }
    componentDidMount() {
        axios.get('http://localhost:8080/selrep/'+this.props.match.params._id)
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

        <div >
        
     
      
        <div >
      
      
          <div class="card-text">
          <div className="container cart">
    
          <div class="row">
                
          {
              (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                //   (this.state.profil.length > 0) ? (this.state.profil.filter((params)=>params.visibilite).map((obj) => {
                  return (
                      
<div class="col-md-12 carde">






<div class="card card-cascade narrower">


<div class="view view-cascade overlay">
<img  class="card-img-top sar"  src={'http://localhost:8080/user/'+obj.image} alt="pdp"/>
<a>
<div class="mask rgba-white-slight"></div>
</a>
</div>


<div class="card-body card-body-cascade">


<h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> {obj.titre}</h5>


<p class="card-text">{obj.description}</p>



</div>


<div class="rounded-bottom mdb-color lighten-3 text-center pt-3">
<ul class="list-unstyled list-inline font-small">
<li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="far fa-comments pr-1"></i> {obj.rdv}</a></li>
</ul>
</div>

</div>
</div>


)



              })) : ('')
          }
  
</div>

          </div>
          </div>
      
      
        </div>
      
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

