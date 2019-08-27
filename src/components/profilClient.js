
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import   './Pho.css';
import Inscrire from './inscrire';
import Direct from './directInsc';
export default class Profilpourclient extends Component {

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
	<div class="row">
		<div class="col-lg-12 col-sm-0">

            <div class="card hovercard">
                <div class="cardheader">

                </div>
                <div class="avatar">
                    <img alt="" src={'http://localhost:8080/pic/'+obj.pho}/>
                </div>
                <div class="info">
                    <div class="title">
                        <a target="_blank" href="https://scripteden.com/">{obj.garage}</a>
                    </div>

                    <p class="li">{obj.description}</p>
                    <div class="li">{obj.contact}</div>
                    <div class="li">{obj.lieu}</div>
                </div>
                <div >
                    <a class="btn btn-primary btn-twitter btn-sm" href="">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a class="btn btn-danger btn-sm" rel="publisher"
                       href="">
                        <i class="fa fa-google-plus"></i>
                    </a>
                    <a class="btn btn-primary btn-sm" rel="publisher"
                       href="">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a class="btn btn-warning btn-sm" rel="publisher" href="">
                        <i class="fa fa-behance"></i>
                    </a>
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