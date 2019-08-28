
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
                    this.props.history.push('/login');
                }
                else{
                  
                }
            
        

    }




liste() {
    return <div>

    <div class="card card-cascade wider reverse">
    
 
  
    <div class="card-body card-body-cascade ">
  
  
      <div class="card-text">
      <div className="container cart">
     
      <div class="row">
            
      {
        (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
            return (
                  
<div class="col-md-4 carde">


<div class="card card-cascade narrower">


<div class="view view-cascade overlay">
<img  class="card-img-top sar"  src={'http://localhost:8080/user/'+obj.image} alt="pdp"/>
<a>
<div class="mask rgba-white-slight"></div>
</a>
</div>


<div class="card-body card-body-cascade">


<h5 class="pink-text pb-2 pt-1"    onClick={()=>{
    console.log(obj._id);
    localStorage.setItem('atelier',obj._id);
    
}}><i class="fas fa-utensils"></i> {obj.titre}</h5>


<p class="card-text">{obj.description.length>120?obj.description.slice(0,90)+'...':obj.description}</p>
<div className="row">


<div className='col-md-6'>

{obj.visibilite===true ?(<button onClick={(e)=>{
       e.preventDefault()
      axios.get("http://localhost:8080/masquer/"+obj._id).then(res=>{
           axios.get('http://localhost:8080/register/'+ localStorage.getItem('id')).then(res=>{
      console.log(res.data)
      this.setState({profil:res.data})
  })
          console.log(res.data)})
     
    //"/masquer/:_id"/register/:_id   
   }} className="btn btn-danger">Desactiver</button>):(<button onClick={(e)=>{
      e.preventDefault()
      console.log(obj._id)
     axios.get("http://localhost:8080/affichier/"+obj._id).then(res=>{
axios.get('http://localhost:8080/register/'+ localStorage.getItem('id')).then(res=>{
      console.log(res.data)
      this.setState({profil:res.data})
  })
          console.log(res.data)})
      
   }} className="btn btn-success">Activer</button>)}
</div>
   
<div className="col-md-6"><button className="btn btn-danger" id="metykosa" onClick={()=>{
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

}}> Modifier </button></div></div>
<div className='row'>
<div className='col-md-6'><Link to={"/descriptionAd/"+obj._id} className="btn btn-primary">Detail</Link>
</div>
<div className="col-md-6"><button className="btn btn-danger" id="metykosa" onClick={()=>{
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
  
  export  default connect(mapStateToProps)(Chacun)