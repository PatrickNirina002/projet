
import React from 'react';
//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     profil:''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadProfil = this.handleUploadProfil.bind(this);
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



  handleUploadProfil(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('profil', this.uploadInput.files[0]);
    fetch('https://finaly-s.herokuapp.com/photo/'+localStorage.getItem('id'), {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ profil: `https://finaly-s.herokuapp.com/photo/${body.profil}` });
        console.log('ity ilay body.fil',body.profil);
       
      });
    });
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadProfil }
       
    >
          
      
          <input id='champ' ref={(ref) => { this.uploadInput = ref; }} type="file" name="profil"/>
       
          <input type="submit" class="fadeIn fourth"   
           
           value="Ajouter" className='bou'/>
      </form>
    );
  }
}

export default Photo;
