
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
class Direct extends Component {
  constructor(props) {
    super(props);
    this.onChangenom = this.onChangenom.bind(this);
    this.onChangematricule = this.onChangematricule.bind(this);
    this.onChangetel = this.onChangetel.bind(this);
    this.onChangedatej = this.onChangedatej.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: '',
      matricule: '',
      tel:'',
      datej:'',
      titre:''
    }
  }
  componentDidMount(){
    this.setState({titre:localStorage.getItem('titre')})
  console.log(localStorage.getItem('titre'));
  if(this.props.auth.isAuthenticated==false) {
    
}
else{
  this.props.history.push('/admin');
}
  }
  onChangenom(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangematricule(e) {
    this.setState({
      matricule: e.target.value
    })  
  }
  onChangetel(e) {
    this.setState({
      tel: e.target.value
    })
  }
  onChangedatej(e) {
    this.setState({
      datej: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      matricule: this.state.matricule,
      tel: this.state.tel,
      datej: this.state.datej
    };
    axios.post('http://localhost:8080/rendre/'+localStorage.getItem('ti'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nom: '',
      matricule: '',
      tel: '',
      datej:''
    })
  }
 
  render() {
    return (<div>
        <div className="blanc">RENDEZ-VOUS IMMÉDIAT</div>
        <div style={{ marginTop: 10 }} className="row">
            <form onSubmit={this.onSubmit}>
                <div className="form-group col-md-3">
                    <input  id='champ'
                      type="text" 
                      className="form-control" 
                      value={this.state.nom}
                      onChange={this.onChangenom}
                      placeholder="Nom"
                      required/>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" id='champ'
                      className="form-control"
                      value={this.state.matricule}
                      onChange={this.onChangematricule}
                      placeholder="Matricule"
                      required/>
                </div>
                <div className="form-group col-md-2">
                    <input type="tel"  id='champ'
                      className="form-control"
                      value={this.state.tel}
                      onChange={this.onChangetel}
                      placeholder="Telephone"
                      required/>
                </div>
                <div className="form-group col-md-2">
                    <input type="date"  id='champ'
                      className="form-control"
                      value={this.state.datej}
                      onChange={this.onChangedatej}
                      placeholder="Date de rendez-vous"
                      required/>
                </div>
                <div className="form-group col-md-2">
                    <input id='champ' type="submit" value="S'incrire" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export  default connect(mapStateToProps)(Direct)