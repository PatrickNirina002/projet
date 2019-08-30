
import React from 'react';

class Modifier extends React.Component {
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
    fetch('https://finaly-s.herokuapp.com/profil/'+localStorage.getItem('ti'), {
      method: 'PUT',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ image: `https://finaly-s.herokuapp.com/profil/${body.image}` });
        console.log('ity ilay body.fil',body.image);
       
      });
    });
    this.setState({
      titre: '',
      description:'',
      prix:'',
       image:''
    })
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage }
       
      >
       <div className="form-group">
        <label>titre:</label>
        <input type="text" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="titre" required/><br></br></div>
          <div className="form-group">
          <label>Description:</label>
        <input type="textarea" id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="description"  required/><br></br></div>
          <div className="form-group"> 
          <label>Prix:</label>
        <input type="text"  id='champ'
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="prix"  required/><br></br>   </div> 
      
          <input id='champ' ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
       
          <input type="submit" class="fadeIn fourth" value="Ajouter" className='bou'/>
      </form>
    );
  }
}

export default Modifier;
