
import React from 'react';

class Modifier extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

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

    fetch('https://finaly-s.herokuapp.com/profi/'+localStorage.getItem('id'), {
      method: 'PUT',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ pho: `https://finaly-s.herokuapp.com/profi/${body.pho}` });
        console.log('ity ilay body.fil',body.pho);
       
      });
    });
    this.setState({
      titre: '',
      description:'',
      prix:'',
       pho:''
    })
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadPho }
       
      >
          
      
          <input id='champ' ref={(ref) => { this.uploadInput = ref; }} type="file" name="pho" />
       
          <input type="submit" class="fadeIn fourth" value="Ajouter" className='bou'/>
      </form>
    );
  }
}

export default Modifier;
