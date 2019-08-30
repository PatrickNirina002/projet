

import React from 'react';
//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { connect } from 'react-redux';
class ModifCouv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  
     image:''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadPho = this.handleUploadPho.bind(this);
  }




  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}


// componentDidMount(){
//   //this.state.profil+=localStorage.getItem('ii')
//   this.setState( {profil:localStorage.getItem('id')} )
//   // this.setState( {email:sessionStorage.getItem('i')} )
//   // this.setState( {password:sessionStorage.getItem('iii')} )
//   console.log(this.state.profil);
  
// }



  handleUploadPho(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('image', this.uploadInput2.files[0]);
    fetch('https://finaly-s.herokuapp.com/couveApdate/'+localStorage.getItem('id'), {
      method: 'PUT',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ image: `https://finaly-s.herokuapp.com/couveApdate/${body.image}` });
        console.log('ity ilayl',body.image);
       
      });
    });
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadPho }
       
    >
          <input id='champ' ref={(ref) => { this.uploadInput2 = ref; }} type="file" name="image"/>
          <input type="submit" class="fadeIn fourth"   
           
           value="Ajouter" className='bou'/>
      </form>
    );
  }
}


export  default ModifCouv
