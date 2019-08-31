
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import   './Pho.css';
import Inscrire from './inscrire';
import Direct from './directInsc';
import {connect} from 'react-redux'
class Profilpourclient extends Component {

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
                
            }
            else{
                this.props.history.push('/admin');
            }
        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (











<div class="container">
	<div class="row">
		<div class="col-lg-12 col-sm-0">

            <div class="card hovercard">
            <div class="col-md-12 col-sm-12 col-xs-12 image-section">
            <img alt="" src={'https://finaly-s.herokuapp.com/couverture/'+obj.image}/>
        </div>
                <div class="avatar">
                    <img alt="" src={'https://finaly-s.herokuapp.com/pic/'+obj.pho}/>
                </div>
                <div class="info">
                    <div class="title">
                        <a target="_blank" href="https://scripteden.com/">{obj.garage}</a>
                    </div>

                    <p class="li">{obj.description}</p>
                    <div class="li">{obj.contact}</div>
                    <Link to="/lieu" class="li icon-mob-recherche-garage">{obj.lieu}</Link>
                </div>
             
             
              <div className="container ">
    

   
                
              
 
                <div class="card-body card-body-cascade text-center">
              
                  <p class="card-text">   <div className="container pop">
                  <Direct/>
                  </div>
                  </p>
              
              
                </div>

              </div>



            </div>

        </div>

	</div>
</div>
)

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
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
  })
  
  export  default connect(mapStateToProps)(Profilpourclient)