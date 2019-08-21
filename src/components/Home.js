
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import {Link } from 'react-router-dom';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
                                    
<div class="col-md-4 carde">
<div>
                                    <Link to={"/affichepho/"+localStorage.getItem('id')} id="titrebe">{obj.garage}</Link><span>  a posté</span>
                                    </div>
<div class="card">




<div class="card-body">

  
  <h4 class="card-title" id="titrebe"><center>{obj.titre}</center> </h4>
  <div className="container"><img width="90%" height="300px" src={'http://localhost:8080/user/'+obj.image} alt="pdp" /></div>
  <p class="card-text"><span>Description:</span> {obj.description}</p>
  <p class="card-text"><span>Prix:</span> {obj.prix}<span>$</span></p>
  <Link className="btn btn-danger " id="metykosa" to={"/rendre/"+obj._id} onClick={()=>{
      console.log(obj._id);
      localStorage.setItem('ti',obj._id)
      
  }}>  S'inscrire </Link>

</div>
</div>
</div>)



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