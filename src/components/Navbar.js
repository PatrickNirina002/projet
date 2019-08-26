import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import Slider from './slider'
import image from './logobe.png'
import './navba.css'
import FooterPage from './footer';
// import Chacun from './chacun';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        test:""
    };
  }

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      componentDidMount(){
        this.setState({test:localStorage.getItem('sary')})
      console.log(localStorage.getItem('sary'));
      }

    render() {
        const {isAuthenticated} = this.props.auth;
        const authLinks = (
            // <ul className="navbar-nav ml-auto">
            //     <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
            //         <img src={user.avatar} alt={user.name} title={user.name}
            //             className="rounded-circle"
            //             style={{ width: '25px', marginRight: '5px'}} />
            //                 Logout
            //     </a>


            //     <li className="nav-item">
            //     <Link className="nav-link" to="/poster">Poster</Link>
            // </li>
               
            
            // </ul>


          //   <div>
          //   <MDBNavbar  color="default-color" dark expand="md" id="eto">
            
          //   <MDBNavbarToggler onClick={this.toggleCollapse} />
          //   <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          //     <MDBNavbarNav left>
          //     <MDBNavItem>
          //   {/* <MDBNavLink to="/register/:_id">listeProduit</MDBNavLink> */}
          //   <MDBNavLink to={"/register/"+localStorage.getItem('id')} className="btn btn-primary">listeProduit</MDBNavLink>
          //   <MDBNavLink to={"/atelier"} className="btn btn-primary">Ajouter de produit</MDBNavLink>
          // </MDBNavItem>
          // <MDBNavItem>
          //   <MDBNavLink to="/poster">Poster</MDBNavLink>
          // </MDBNavItem>
                
          //       <MDBNavItem>
          //         <MDBDropdown>
                    
                    
          //         </MDBDropdown>
          //       </MDBNavItem>
          //     </MDBNavbarNav>
          //     <MDBNavbarNav right>
                
            
          //       <MDBNavItem>
          //         <MDBDropdown>
          //           <MDBDropdownToggle nav caret>
          //             <MDBIcon icon="user" />
          //           </MDBDropdownToggle>
          //           <MDBDropdownMenu className="dropdown-default">
          //             <MDBDropdownItem href="#!" onClick={this.onLogout.bind(this)}>Logout</MDBDropdownItem>
                      
          //           </MDBDropdownMenu>
          //         </MDBDropdown>
          //       </MDBNavItem>
          //     </MDBNavbarNav>
          //   </MDBCollapse>
          // </MDBNavbar>
          // </div>


          <div >



<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
Â <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

<div class="collapse navbar-collapse" id="navbarResponsive">
  <ul class="navbar-nav navbar-sidenav">

      <a class="nav-link navlogo text-center" href="index.php">
        <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
      </a>

    <li class="nav-item">
      <Link class="nav-link sidefrst li" to={"/affichepho/"+localStorage.getItem('id')}>
        <span class="textside">Profil</span>
      </Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link sidesforth li" to={"/afficherendre/"+localStorage.getItem('id')}>
      <span class="textside">Liste de rendez-vous</span>
    </Link>
    </li>

    <li class="nav-item">
      <Link class="nav-link sidesecnd li"   to="/atelier">
        <span class="textside">Ajouter de réparation</span>
      </Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link sidesthrd li" to={"/register/"+localStorage.getItem('id')}>
        <span class="textside">Liste de réparation</span>
      </Link>
    </li>
   
    <li class="nav-item">
      <Link class="nav-link sidesfifth li" to={"/gestion/"+localStorage.getItem('id')}>
        <span class="textside">Gestion</span>
      </Link>
    </li>
    <li class="nav-item">
      <a class="nav-link sidesix li" href="service.php">
        <span class="textside">Â  Services</span>
      </a>
    </li>
  </ul>
  
  <ul class="navbar-nav2 ml-auto">
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img className="roundedImage" src={'http://localhost:8080/pic/'+this.state.test} alt="Profile image example"/> </a>
        <ul class="dropdown-menu">
            <li class="resflset li"><a  onClick={()=>{
              console.log(this.state.test);
              
            }}><i class="fa fa-fw fa-cog"></i> Edit profile</a></li>
            <li class="divider"></li>
            <li class="resflset li"><a href="#"  to='/login' onClick={this.onLogout.bind(this)} ><i     class="fa fa-fw fa-power-off"></i> Logout</a></li>
        </ul>
    </li>
  </ul>
  
</div>
</nav>

<div className="espace">


</div>
</div>
        )
      const guestLinks = (
        // <ul className="navbar-nav ml-auto">
        //     {/* <li className="nav-item">
        //         <Link className="nav-link" to="/register">Sign Up</Link>
        //     </li> */}
        //     <li className="nav-item">
        //     <Link className="navbar-brand" to="/client">Home</Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link className="nav-link" to="/login">Sign In</Link>
        //     </li>
            
        // </ul>
        <div>
       <div>
   <MDBNavbar  color="default-color" dark expand="md" id="eto">
            
   <MDBNavbarToggler onClick={this.toggleCollapse} />
   <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
     <MDBNavbarNav left>
     <MDBNavItem>
  
   <MDBNavLink to="/dd" id='daholo'>A propos</MDBNavLink>
 </MDBNavItem>
 
 <MDBNavItem>
  
 <MDBNavLink to="/" id='daholo'>Accueil</MDBNavLink>
</MDBNavItem> 
       <MDBNavItem>
      
       </MDBNavItem>
     </MDBNavbarNav>
     <MDBNavbarNav right>
       
 
            <MDBNavItem>
            <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <MDBIcon icon="user" />
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default">
                 <MDBNavLink  to="/login" id="coleur">
              Connecter
            </MDBNavLink>
             
            </MDBDropdownMenu>
          </MDBDropdown>
            </MDBNavItem>
     </MDBNavbarNav>
   </MDBCollapse>
 </MDBNavbar>
 </div>
  
   
   </div>

      )
        return(
            
                
                <div id="navbarSupportedContent"  >
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
           
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));