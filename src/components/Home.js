
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import {Link } from 'react-router-dom';
import Inscrire from './inscrire';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Slider from './slider';
import Footer from './footer';
import {connect} from 'react-redux'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] ,test:"",recherche:""};
     
        this.onChange = this.onChange.bind(this)  

    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
            
            
        })
        console.log(this.state.recherche);
    }
    componentDidMount() {
        axios.get('https://finaly-s.herokuapp.com/affichertous')
            .then(response => {
                console.log(response.data);
                this.setState({ profil: response.data });
                localStorage.setItem('atelier',response.data._id)
            })
            .catch(function (error) {
                console.log(error);
            })

            this.setState({test:localStorage.getItem('sarybe')})
            console.log(localStorage.getItem('sarybe'));
            if(this.props.auth.isAuthenticated==false) {
                
            }
            else{
                this.props.history.push('/admin');
            }
    }

    liste() {
        return <div>
        <div className="slid"><Slider/></div>

        <div class="card card-cascade wider reverse">
        
     
      
        <div class="card-body card-body-cascade ">
      
      
          <div class="card-text">
          <div className="container cart">
          <div id="back">
          <h1 className="cole">DÉCOUVREZ LES PRESTATIONS AUTOMOBILES</h1>
          <p class="card-text cole">Profitez d’une prestation de qualité effectuée par de véritables experts. Réalisez dès maintenant votre devis  et obtenez un RDV pour la réparation de votre véhicule.</p>
          <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 form-group">
          <input type="text" name="recherche"  class="form-control we" value={this.state.recherche} onChange={this.onChange}  placeholder="Entrer le titre pour le rechercher"/></div>
          </div>
          </div>
          <div className="v"></div>
          <div class="row">
                
          {
              //(this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                  (this.state.profil.length > 0) ? (this.state.profil.filter((params)=>params.visibilite).filter((params)=>params.titre.toUpperCase().indexOf(this.state.recherche) !==-1).map((obj) => {
                  return (
                      
<div class="col-md-4 carde">






<div class="card card-cascade narrower">

<div>
<img className="ferme" src={'https://finaly-s.herokuapp.com/pic/'+obj.photo} aly=""/>
                      <Link to={"/profilclient/"+obj.id2} id="titrebe" onClick={()=>{
                          localStorage.setItem('idregister',obj.id2)
                          console.log(obj.id2);
                      }}>{obj.garage}</Link><span>  a posté</span>
                      </div>

<div class="view view-cascade overlay">
<img  class="card-img-top sar"  src={'https://finaly-s.herokuapp.com/user/'+obj.image} alt="pdp"/>
<a>
<div class="mask rgba-white-slight"></div>
</a>
</div>


<div class="card-body card-body-cascade">


<h5 class="pink-text pb-2 pt-1"> {obj.titre.toUpperCase()}</h5>


<p class="card-text para">{obj.description.length>120?obj.description.slice(0,100)+'...':obj.description}</p>
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
<div className="row">
<div className="col-md-2"></div>
<div className="col-md-10"><Link className="btn btn-primary long" to={"/affdescription/"+obj._id} onClick={()=>{
    console.log(obj._id);
    
}}>plus de detail</Link></div>
</div>

</div>


<div class="rounded-bottom mdb-color lighten-3 text-center pt-3">
<ul class="list-unstyled list-inline font-small">
<li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="far fa-comments pr-1"></i> {obj.rdv}</a></li>
</ul>
</div>

</div>
</div>


)



              })) : (<div className="videbe"></div>)
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
  
  export  default connect(mapStateToProps)(Home)