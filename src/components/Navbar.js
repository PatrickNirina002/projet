import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import Slider from './slider'
import image from './logobe.png'
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown} from "mdbreact";
class Navbar extends Component {

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
<div id="top-nav" class="navbar navbar-inverse navbar-static-top eto">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    
                    <ul >
                    <li><a href="a" to='/login' onClick={this.onLogout.bind(this)}  id="conect"><i class="fa fa-sign-out"></i> Deconnexion</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>

</div>


<div class="col-lg-2 col-md-2 col-sm-3 col-xs-12" id ="aaa">

    <ul className="midina" >
        <Link  to='/bienvenue' className='sac'> A propos</Link><br/><br/>
        <Link to={"/atelier"}  className='sac'>Ajouter de l'atelier</Link><br/><br/>
        <Link to={"/register/"+localStorage.getItem('id')} className='sac'> Liste des ateliers</Link><br/><br/>
        {/* <li><a href="a"><i class="fa fa-lock"></i> Change Password</a></li><br/><br/> */}

    </ul>
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
       <img width='80px' height='80px' src={image} />
   <MDBNavLink to="/" id='daholo'>Accueil</MDBNavLink>
 </MDBNavItem>
 
       
       <MDBNavItem>
         <MDBDropdown>
           
           
         </MDBDropdown>
       </MDBNavItem>
     </MDBNavbarNav>
     <MDBNavbarNav right>
       
     <MDBNavLink className="waves-effect waves-light" to="/login" id='daholo'>
              Connecter
            </MDBNavLink>
     </MDBNavbarNav>
   </MDBCollapse>
 </MDBNavbar>
 </div>
  <div className="slider"><Slider/></div> 
   </div>

      )
        return(
            
                
                <div  id="navbarSupportedContent">
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