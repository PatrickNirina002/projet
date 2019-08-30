
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import   './affichePho.css';
import {connect} from 'react-redux'
class Profiles extends Component {

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
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (





<div class="container main-secction">
<div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12 image-section">
        <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/08/57/41562ad4a92b16a.jpg"/>
    </div>
    <div class="row user-left-part">
        <div class="col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left">
            <div class="row ">
                <div class="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                <Link to={'/profi/'+obj._id} > <img src={'https://finaly-s.herokuapp.com/pic/'+obj.pho} alt="" class="rounded-circle"/></Link>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center">
                    <button id="btn-contact"  data-toggle="modal" data-target="#contact" class="btn btn-success btn-block follow">Contactarme</button> 
                    <button class="btn btn-warning btn-block">Descargar Curriculum</button>                               
                </div>
                <div class="row user-detail-row">
                    <div class="col-md-12 col-sm-12 user-detail-section2 pull-left">
                        <div class="border"></div>
                        <p>FOLLOWER</p>
                        <span>320</span>
                    </div>                           
                </div>
               
            </div>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
            <div class="row profile-right-section-row">
                <div class="col-md-12 profile-header">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                            <h1>Juan Perez</h1>
                            <h5>Developer</h5>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth">
                            <a href="/search" class="btn btn-primary btn-block">Seguir buscando</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-8">
                                <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                          <a class="nav-link active" href="#profile" role="tab" data-toggle="tab"><i class="fas fa-user-circle"></i> Perfil Profesional</a>
                                        </li>
                                        <li class="nav-item">
                                          <a class="nav-link" href="#buzz" role="tab" data-toggle="tab"><i class="fas fa-info-circle"></i> Información Detallada</a>
                                        </li>                                                
                                      </ul>
                                      
                                      
                                      <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane fade show active" id="profile">
                                                <div class="row">
                                                        <div class="col-md-2">
                                                            <label>ID</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">509230671</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <label>Nom</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">{obj.name}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <label>Prénom</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">{obj.prenom}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <label>Nom de garage</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">{obj.garage}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <label>Lieu</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">{obj.lieu}</p>
                                                        </div>
                                                    </div>
                                        </div>
                                        <div role="tabpanel" class="tab-pane fade" id="buzz">
                                                <div class="row">
                                                        <div class="col-md-6">
                                                            <label>contact</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">{obj.contact}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Total Projects</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">230</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label>English Level</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">Expert</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Availability</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p className="li">6 months</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <label>Déscription</label>
                                                            <br/>
                                                            <p className="li">{obj.description}</p>
                                                        </div>
                                                    </div>
                                        </div>
                                        
                                      </div>
                  
                        </div>
                        <div class="col-md-4 img-main-rightPart">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row image-right-part">
                                        <div class="col-md-6 pull-left image-right-detail">
                                            
                                        </div>
                                    </div>
                                </div>
                                <a href="http://camaradecomerciozn.com/">
                                    <div class="col-md-12 image-right">
                                         
                                    </div>
                                </a>
                                <div class="col-md-12 image-right-detail-section2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>



)

                            })) : (<div className="videbe"></div>)
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
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
  })
  
  export  default connect(mapStateToProps)(Profiles)