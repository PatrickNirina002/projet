
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Modifier from './update';
import Descri from './descri';
import {connect} from 'react-redux'
class Chacun extends Component {

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
    return <div className="admin">

    <div >
    
 
  
    <div >
  
  
      <div >
      <div className="container ">
     
      <div class="row">
            
      {
        (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
            return (
                  




<div class="card text-center">
  <div class="card-header titl">
    {obj.titre.toUpperCase()}
  </div>
  <div class="card-body">
     <div className="row">
     <div className="col-md-5"><img  class="card-img-top sar"  src={'https://finaly-s.herokuapp.com/user/'+obj.image} alt="pdp"/></div>
     <div className="col-md-7">
    <p class="card-text">{obj.description}</p>
    
    </div>
    </div>
    <div className="row">
    <div className="col-md-9"></div>
    <p className="col-md-3 card-text">{obj.prix} $</p>
    </div>
  </div>
  <div class="card-footer text-muted">
    <div className="row">
    <div className='col-md-3'>

{obj.visibilite===true ?(<button onClick={(e)=>{
       e.preventDefault()
      axios.get("https://finaly-s.herokuapp.com/masquer/"+obj._id).then(res=>{
           axios.get('https://finaly-s.herokuapp.com/register/'+ localStorage.getItem('id')).then(res=>{
      console.log(res.data)
      this.setState({profil:res.data})
  })
          console.log(res.data)})
     
    //"/masquer/:_id"/register/:_id   
   }} className="btn btn-danger ad">Desactiver</button>):(<button onClick={(e)=>{
      e.preventDefault()
      console.log(obj._id)
     axios.get("https://finaly-s.herokuapp.com/affichier/"+obj._id).then(res=>{
axios.get('https://finaly-s.herokuapp.com/register/'+ localStorage.getItem('id')).then(res=>{
      console.log(res.data)
      this.setState({profil:res.data})
  })
          console.log(res.data)})
      
   }} className="btn btn-success ad">Activer</button>)}
</div>
    <div className="col-md-3"><button className="btn btn-danger ad" id="metykosa" onClick={()=>{
        console.log(obj._id);
        localStorage.setItem('ti',obj._id)
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
        <div className="row">
        <div className="col-md-11"></div>
        <div className="col-md-1"><button onClick={onClose} className="ferme">X</button></div>
        </div>
        </div>
        
        <div class="card-body card-body-cascade ">
        
        
        <p class="card-text">
        
        
        <Modifier/>
        
        
        
        
        </p>
        
        
        </div>
        
        </div>
        </div>
        
        
        );
        }
        });
        
        }}> Modifier </button></div>
    <div className="col-md-3"><button className="btn btn-danger ad" id="metykosa" onClick={()=>{
        console.log(obj._id);
        localStorage.setItem('ti',obj._id)
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
        
        
        <Descri/>
        
        
        
        
        </p>
        
        
        </div>
        
        </div>
        </div>
        
        
        );
        }
        });
        
        }}> plus description </button></div>
    <div className="col-md-3"><Link to={"/descriptionAd/"+obj._id} className="btn btn-primary ad">Detail</Link></div>
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
  
  export  default connect(mapStateToProps)(Chacun)