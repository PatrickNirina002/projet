
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import   './affichePho.css';
export default class AffichePho extends Component {

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

        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (



<div class="container">
    <div class="fb-profile">
        <img align="left" class="fb-image-lg" src="http://lorempixel.com/850/280/nightlife/5/" alt="Profile image example"/>
        <img align="left" class="fb-image-profile thumbnail" src={'http://localhost:8080/pic/'+obj.pho} alt="Profile image example"/>
        <div class="fb-profile-text">
            <h1><Link to={'/profi/'+obj._id}  >changer la photo de profil</Link></h1>
        </div>
    </div>
    <div className='marg'>
    <h1 ><span>Nom:</span>{obj.name}</h1>
          
    <h1><span>Prénom:</span>{obj.prenom}</h1>
    <h1 ><span>Nom de garage:</span>{obj.garage}</h1>
    <h1 ><span>Lieu:</span>{obj.lieu}</h1>
    <h1 ><span>Contact:</span>{obj.contact}</h1>
    <h1 >{obj.description}</h1>
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