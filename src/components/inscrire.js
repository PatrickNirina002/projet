
import React, { Component } from 'react';
import axios from 'axios';

export default class Inscrire extends Component {
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
      datej:''
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
    return (
        <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nom:  </label>
                    <input  id='champ'
                      type="text" 
                      className="form-control" 
                      value={this.state.nom}
                      onChange={this.onChangenom}
                      required/>
                </div>
                <div className="form-group">
                    <label>matricule: </label>
                    <input type="text" id='champ'
                      className="form-control"
                      value={this.state.matricule}
                      onChange={this.onChangematricule}
                      required/>
                </div>
                <div className="form-group">
                    <label>tel: </label>
                    <input type="tel"  id='champ'
                      className="form-control"
                      value={this.state.tel}
                      onChange={this.onChangetel}
                      required/>
                </div>
                <div className="form-group">
                    <label>datej: </label>
                    <input type="text"  id='champ'
                      className="form-control"
                      value={this.state.datej}
                      onChange={this.onChangedatej}
                      required/>
                </div>
                <div className="form-group">
                    <input id='champ' type="submit" value="S'incrire" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}