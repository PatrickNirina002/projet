
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import   './affichePho.css';
import {connect} from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ModifPho from './modifPho';
import ModifCouv from './modifCouverture';
import UpdateProfile from './updateProfil';
import './Pho.css'
class AffichePho extends Component {

    constructor(props) {
        super(props);
        
       
        this.state = { profil: [],anarana:'',fanapy:'' };
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
                 this.setState({nomAd:localStorage.getItem('anarana')})
                this.setState({preAdmin:localStorage.getItem('prenom')})
              console.log(localStorage.getItem('sary'));
            

    }

    liste() {
        return <div className="admin">

                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (





<div onClick={()=>{console.log(obj.name)
    localStorage.setItem('sarybe',obj.name);
}} >

<div >
	<div class="row">
		<div class="col-lg-12 col-sm-0">

            <div class="card hovercard">
            <div class="col-md-12 col-sm-12 col-xs-12 image-section">
            <p onClick={()=>{
                confirmAlert({
                    customUI: ({ onClose }) => {
                    return (
                    <div className='custom-ui'>
                    
                    
                    
                    
                    
                    
                    <div class="card card-cascade wider reverse">
                    
                    <div class="view view-cascade overlay">
                    <div className="row">
                    <div className="col-md-8"></div>
                    <div className="col-md-4"><button onClick={onClose} className="ferme">X</button></div>
                    </div>
                    </div>
                    
                    <div class="card-body card-body-cascade ">
                    
                    
                    <p class="card-text">
                    <div ><ModifCouv/></div>
                    </p>
                    
                    
                    </div>
                    
                    </div>
                    </div>
                    
                    
                    );
                    }
                    });
            }}
            ><img alt="" src={'https://finaly-s.herokuapp.com/couverture/'+obj.image}/></p>
        </div>
                <div class="avatar">
                <div  onClick={()=>{
                    confirmAlert({
                        customUI: ({ onClose }) => {
                        return (
                        <div className='custom-ui'>
                        
                        
                        
                        
                        
                        
                        <div class="card card-cascade wider reverse">
                        
                        <div class="view view-cascade overlay">
                        <div className="row">
                        <div className="col-md-8"></div>
                        <div className="col-md-4"><button onClick={onClose} className="ferme">X</button></div>
                        </div>
                        </div>
                        
                        <div class="card-body card-body-cascade ">
                        
                        
                        <p class="card-text">
                        <div ><ModifPho/></div>
                        </p>
                        
                        
                        </div>
                        
                        </div>
                        </div>
                        
                        
                        );
                        }
                        });
                }}> <img alt="" src={'https://finaly-s.herokuapp.com/pic/'+obj.pho}/></div>
                </div>
                <div class="info">
                    <div class="title">
                        <a target="_blank" href="https://scripteden.com/">{obj.garage}</a>
                    </div>

                    
                   
                    
                </div>
                <div >
                    <Link class="btn btn-primary btn-twitter btn-sm" to="/admin">
                        ajouter de piéce
                    </Link>
                    <Link class="btn btn-danger btn-sm" rel="publisher"
                    to={"/afficherendre/"+obj._id}>
                        Liste de rendez-vous
                    </Link>
                    <a class="btn btn-primary btn-sm" rel="publisher"
                    onClick={()=>{
                        confirmAlert({
                            customUI: ({ onClose }) => {
                            return (
                            <div className='custom-ui'>
                            
                            
                            
                            
                            
                            
                            <div class="card card-cascade wider reverse">
                            
                            <div class="view view-cascade overlay">
                            <div className="row">
                            <div className="col-md-8"></div>
                            <div className="col-md-4"><button onClick={onClose} className="ferme">X</button></div>
                            </div>
                            </div>
                            
                            <div class="card-body card-body-cascade ">
                            
                            
                            <p class="card-text">
                            <div ><UpdateProfile/></div>
                            </p>
                            
                            
                            </div>
                            
                            </div>
                            </div>
                            
                            
                            );
                            }
                            });
                    }}>
                        Modifier le profil
                    </a>
                    <Link class="btn btn-warning btn-sm" rel="publisher" to={"/gestion/"+localStorage.getItem('id')}>
                        Gestion de compte
                    </Link>
                </div>
                <p><i class="fa fa-home lii" aria-hidden="true">{obj.lieu}</i></p>
                <p><i class="fa fa-mobile lii" aria-hidden="true" > {obj.contact}</i></p>
                <p class="lii">{obj.description}</p>
              <div className="container ">           
                <div class="card-body card-body-cascade text-center">
              
                  <p class="card-text">   <div className="container pop">
                 

                  </div>
                  </p>
              
              
                </div>

              </div>



            </div>

        </div>

	</div>
</div>
</div>



)

                            })) : (<p className="ici videbe">{localStorage.getItem('anarana')} cliquer <span ><Link to={"/prof/"+localStorage.getItem('id')}>ici</Link></span>  pour ajouter votre profile et compléter toute le champ  </p>)
                        }
                
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
  
  export  default connect(mapStateToProps)(AffichePho)