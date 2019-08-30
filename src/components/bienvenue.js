import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
class Bienvenue extends Component {
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        if(this.props.auth.isAuthenticated==false) {
            this.props.history.push('/login');
        }
        else{
          
        }
    }
    render() {
        return (
            
              <div>
              <div class="card card-cascade narrower propo">  
          
              <div class="card-body card-body-cascade">      
                        <div class="row">
                              
                       
              <div class="col-md-12 carde">
              
              
              
              
              
              
              
              <p class="card-text"> la but de cette site est de faire postuler votre pièce de réparation  pour que vous soyez de faire réparer la voiture de client mais vous n’avez pas le droit de faire postuler pièce  si vous n’a pas compléter  votre profil
              Pour compléter votre profil  vous cliquez<span><Link to={"/prof/"+localStorage.getItem('id')}>ici</Link></span>   et compléter tout le champ et ajoutant aussi votre photo de profil et la photo de couverture de votre garage .
              Et après vous  devez poster votre pièce de réparation et le client  peut de fait rendez-vous lorsque le pièce est s’intéresse .
              Et l’autre côté vous devez connaître tout le client de faire une ou plusieurs de rendez-vous   .
               
              Et dans le bouton gestion est la gestion de compte de votre garage soit pendant la journée
              soit pendant la semaine et aussi par mois.
              
              il y a le bouton total pour connaître la total de votre compte soit pendant journée ou par semaine ou par mois.
              
              et il y a aussi une bouton imprimer pour changer en PDF   .</p>
              
              
              
              
              </div>
            </div>
            </div>
            </div>
            </div>

        );
    }
}



const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
  })
  
  export  default connect(mapStateToProps)(Bienvenue)
