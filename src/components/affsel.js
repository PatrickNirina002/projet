
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import {Link } from 'react-router-dom';
import Inscrire from './inscrire';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { connect } from 'react-redux';
class Seul extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };
        

    }
    componentDidMount() {
        axios.get('https://finaly-s.herokuapp.com/selrep/'+this.props.match.params._id)
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
<img  class="card-img-top sar"  src={'https://finaly-s.herokuapp.com/user/'+obj.image} alt="pdp"/>
<a>
<div class="mask rgba-white-slight"></div>
</a>
</div>


<div class="card-body card-body-cascade">


<h5 class="pink-text pb-2 pt-1"> {obj.titre.toUpperCase()}</h5>


<p class="card-text">{obj.description}</p>
<div className="row">
<div className="col-md-7"></div>
<div className="col-md-5">
<p class="card-text para loko">{obj.prix} $</p>
</div>
</div>
<div className="row">
<div className="col-md-2"></div>
<div className="col-md-10"><button className="btn btn-danger long" id="metykosa" onClick={()=>{
console.log(obj._id);
localStorage.setItem('ti',obj._id)
localStorage.setItem('titre',obj.titre)
confirmAlert({
customUI: ({ onClose }) => {
return (
<div className='custom-ui'>






<div class="card card-cascade wider reverse">

<div class="view view-cascade overlay">
<div className="row">
<div className="col-md-11"></div>
<div className="col-md-1"><button onClick={onClose} className="ferme">X</button></div>
</div>
</div>

<div class="card-body card-body-cascade ">


<p class="card-text">
<div className="pop"><Inscrire/></div>
</p>


</div>

</div>
</div>


);
}
});

}}> Prendre de rdv </button></div></div>


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
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
  })
  
  export  default connect(mapStateToProps)(Seul)