
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
export default class AffPhoto extends Component {

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

        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (
<div class="col-md-6 carde">
<div class="card">




<div class="card-body">

  
  <h4 class="card-title" id='titrebe'
  onClick={()=>{
      console.log(obj._id);
      localStorage.setItem('atelier',obj._id);
      
  }}><center>{obj.titre}</center> </h4>
  <img width="100%" height="300px" src={'https://finaly-s.herokuapp.com/photo/'+obj.profil} alt="pdp" />
  
 
 

</div>
</div>
</div>)

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