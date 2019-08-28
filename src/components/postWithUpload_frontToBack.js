
import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { connect } from 'react-redux';
class PostFrontToBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     titre: '',
     description:'',
      prix:'',
     image:''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated==false) {
        this.props.history.push('/login');
    }
    else{
      
    }
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



  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('image', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('description',this.state.description);
    data.append('prix',this.state.prix);
    fetch('http://localhost:8080/register/'+localStorage.getItem('id'), {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ image: `http://localhost:8080/register/${body.image}` });
        console.log('ity ilay body.fil',body.image);
       
      });
    });
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage }
       
    ><div className="form-group">
        <label>titre:</label>
        <input type="text" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="titre"  /><br></br></div>
          <div className="form-group">
          <label>Description:</label>
        <input type="textarea" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="description"  /><br></br></div>
          <div className="form-group"> 
          <label>Prix:</label>
        <input type="text" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="prix" /><br></br>   </div> 
      
          <input id='champ' ref={(ref) => { this.uploadInput = ref; }} type="file" name="image"/>
       
          <input type="submit" class="fadeIn fourth"   
        type="submit" id="ajouter_boutton"
           
           value="Ajouter" className='bou'/>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export  default connect(mapStateToProps)(PostFrontToBack)