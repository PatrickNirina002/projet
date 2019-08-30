
import React, { Component } from 'react';
import axios from 'axios';
import Index from './affichegest';
import { BrowserRouter as Router, Route } from 'react-router-dom';
export default class DescriUpd extends Component {
  constructor(props) {
    super(props);
    this.onChangetitre = this.onChangetitre.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      titre: '',
      description: '',

    }
  }
  onChangetitre(e) {
    this.setState({
      titre: e.target.value
    });
  }
  onChangedescription(e) {
    this.setState({
      description: e.target.value
    })  
  }


  onSubmit(e) {
    e.preventDefault();
    const obj = {
      titre: this.state.titre,
      description: this.state.description
    };
    axios.put('https://finaly-s.herokuapp.com/updDescription/'+localStorage.getItem('idDesc'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      titre: '',
      description: ''
    })
  }
 
  render() {
    return (
      <div>
     
        <div >
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="li">titre:  </label>
                    <input  id='champ'
                      type="text" 
                      className="form-control " 
                      value={this.state.titre}
                      onChange={this.onChangetitre}
                      required/>
                </div>
                <div >
                    <label className="li">Description: </label>
                    <textarea id='champ'
                     
                      value={this.state.description}
                      onChange={this.onChangedescription}
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