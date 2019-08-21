
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Gest from './gest';
export default class Affrendre extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      
      
      axios.get('http://localhost:8080/afficherendre/'+localStorage.getItem('id'))
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }





    liste() {
      return <div>
      
          <div className="table-responsive">
              <table class="table table-bordered" style={{ marginTop: 20 }}>
                  <thead>
                      <tr>
                          <th className="li">Date</th>
                          <th className="li">Type de réparation</th>
                          <th className="li">Matricule</th>
                          <th className="li">Nom</th>
                          <th className="li">Telephone</th>
                          <th className="li">Date de rendez-vous</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          (this.state.business.length > 0) ? (this.state.business.map((obj) => {
                              return <tr key={obj._id}>
                                  <td className="li">{obj.date}</td>
                                  <td className="li">{obj.titre}</td>
                                  <td className="li">{obj.matricule}</td>
                                  <td className="li">{obj.nom}</td>
                                  <td className="li">{obj.tel}</td>
                                  <td className="li">{obj.datej}</td>
                                  {console.log(obj)}
                              </tr>

                          })) : ('')
                      }
                  </tbody>
              </table>
          </div>
          <div>
          <div className="row">
          <div className="col-md-9"></div>
       
          </div>
          </div>
          <div className="row">
          <div className="col-md-9"></div>
          <div className="container  col-md-3 li"><p className="row ss"><span id="total">&nbsp;&nbsp;</span></p></div>
          </div>
          
      </div>
  }
  render() {
      return (
          <div>
              {this.liste()}
          </div>
      );
  }
  }