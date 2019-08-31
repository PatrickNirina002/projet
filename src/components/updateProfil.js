
import React, { Component } from 'react';
import axios from 'axios';
import Index from './affichegest';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
 class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.onChangegarage = this.onChangegarage.bind(this);
    this.onChangelieu = this.onChangelieu.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangecontact = this.onChangecontact.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      garage: '',
      lieu: '',
      description:'',
      contact:''
    }
  }




  onChangegarage(e) {
    this.setState({
      garage: e.target.value
    });
  }
  onChangelieu(e) {
    this.setState({
      lieu: e.target.value
    })  
  }
  onChangedescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangecontact(e) {
    this.setState({
      contact: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      garage: this.state.garage,
      lieu: this.state.lieu,
      description: this.state.description,
      contact: this.state.contact
    };
    axios.put('https://finaly-s.herokuapp.com/profUpdate/'+localStorage.getItem('id'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      garage: '',
      lieu: '',
      description: '',
      contact:''
    })
  }
 
  render() {
    return (
      <div>
     
        <div style={{ marginTop: 10 }} id="formulaire">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="li">Nom de garage:  </label>
                    <input  id='champ'
                      type="text" 
                      className="form-control " 
                      value={this.state.garage}
                      onChange={this.onChangegarage}
                      required/>
                </div>
                <div className="form-group">
                    <label className="li">Lieu: </label>
                    <input type="text" id='champ'
                      className="form-control"
                      value={this.state.lieu}
                      onChange={this.onChangelieu}
                      required/>
                </div>
                <div className="form-group">
                    <label className="li">Description: </label>
                    <input type="description"  id='champ'
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangedescription}
                      required/>
                </div>
                <div className="form-group">
                    <label className="li">Telephone: </label>
                    <input type="text"  id='champ'
                      className="form-control"
                      value={this.state.contact}
                      onChange={this.onChangecontact}
                      required/>
                </div>
                <div className="form-group">
                    <input id='champ' type="submit" value="Mofier" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        

        
        </div>
    )
  }
}


export  default UpdateProfile