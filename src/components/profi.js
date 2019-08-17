
import React from 'react';
//import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

class Prof extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      garage:'',
      lieu:'',
      contact:'',
      description:'',
     pho:''

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
    data.append('pho', this.uploadInput.files[0]);
    data.append('garage',this.state.garage);
    data.append('lieu',this.state.lieu);
    data.append('contact',this.state.contact);
    data.append('description',this.state.description);
    fetch('http://localhost:8080/prof/'+localStorage.getItem('id'), {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ pho: `http://localhost:8080/prof/${body.pho}` });
        console.log('ity ilay body.fil',body.pho);
       
      });
    });
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadPho }
       
    >
          <div className="form-group">
          <label>lieu:</label>
        <input type="text" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="lieu"  /><br></br> </div>
          <div className="form-group">
          <label>contact:</label>
        <input type="number" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="contact"  /><br></br>  </div>
          <div className="form-group">
          <label>description:</label>
        <input type="text" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="description"  /><br></br>  </div>
      
          <input id='champ' ref={(ref) => { this.uploadInput = ref; }} type="file" name="pho"/>
       
          <input type="submit" class="fadeIn fourth"   
           
           value="Ajouter" className='bou'/>
      </form>
    );
  }
}

export default Prof;
