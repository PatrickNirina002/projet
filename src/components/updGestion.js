
import React, { Component } from 'react';
import axios from 'axios';
import Index from './affichegest';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
 class UpdGestion extends Component {
  constructor(props) {
    super(props);
    this.onChangematricule = this.onChangematricule.bind(this);
    this.onChangenom_pro = this.onChangenom_pro.bind(this);
    this.onChangetype_rep = this.onChangetype_rep.bind(this);
    this.onChangeprix = this.onChangeprix.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      matricule: '',
      nom_pro: '',
      type_rep:'',
      prix:''
    }
  }




  onChangematricule(e) {
    this.setState({
      matricule: e.target.value
    });
  }
  onChangenom_pro(e) {
    this.setState({
      nom_pro: e.target.value
    })  
  }
  onChangetype_rep(e) {
    this.setState({
      type_rep: e.target.value
    })
  }
  onChangeprix(e) {
    this.setState({
      prix: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      matricule: this.state.matricule,
      nom_pro: this.state.nom_pro,
      type_rep: this.state.type_rep,
      prix: this.state.prix
    };
    axios.put('https://finaly-s.herokuapp.com/gestionApdate/'+localStorage.getItem('idGest'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      matricule: '',
      nom_pro: '',
      type_rep: '',
      prix:''
    })
  }
 
  render() {
    return (
      <div>
     
        <div style={{ marginTop: 10 }} id="formulaire">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="li">Matricule:  </label>
                    <input  id='champ'
                      type="text" 
                      className="form-control " 
                      value={this.state.matricule}
                      onChange={this.onChangematricule}
                      required/>
                </div>
                <div className="form-group">
                    <label className="li">Nom de propriétaire: </label>
                    <input type="text" id='champ'
                      className="form-control"
                      value={this.state.nom_pro}
                      onChange={this.onChangenom_pro}
                      required/>
                </div>
                <div className="form-group">
                    <label className="li">Type de réparation: </label>
                    <input type="type_rep"  id='champ'
                      className="form-control"
                      value={this.state.type_rep}
                      onChange={this.onChangetype_rep}
                      required/>
                </div>
                <div className="form-group">
                    <label className="li">prix: </label>
                    <input type="text"  id='champ'
                      className="form-control"
                      value={this.state.prix}
                      onChange={this.onChangeprix}
                      required/>
                </div>
                <div className="form-group">
                    <input id='champ' type="submit" value="Ajouter" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        
      
        
        </div>
    )
  }
}


export  default UpdGestion