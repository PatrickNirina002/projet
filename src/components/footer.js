import React, { Component } from 'react';
import Foot from './foot';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
class Footer extends Component {
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
          <footer class="page-footer font-small blue " id="fo">

          <div class="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
          </div>
          
        
        </footer>


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
     
      <Foot/>
      
  

   
   </div>

      )
        return(
            
                
                <div   >
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
           
        )
    }
}
Footer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Footer));