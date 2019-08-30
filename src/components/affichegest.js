
import React, { Component } from 'react';
import axios from 'axios';
import UpdGestion from './updGestion';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import TableRow from './TableRow';
import Gest from './gest';
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      
      
      axios.get('https://finaly-s.herokuapp.com/affichegestion/'+localStorage.getItem('id'))
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
                          <th className="li">Numero</th>
                          <th className="li">Nom de propriétaire</th>
                          <th className="li">Type de réparation</th>
                          <th className="li">Prix</th>
                          <th className="li">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          (this.state.business.length > 0) ? (this.state.business.map((obj) => {
                              return <tr key={obj._id}>
                                  <td className="li" onClick={()=>{
                                    console.log(obj._id);
                                    
                                    localStorage.setItem('idGest',obj._id)
                                  }}>{obj.matricule}</td>
                                  <td className="li">{obj.nom_pro}</td>
                                  <td className="li">{obj.type_rep}</td>
                                  <td className="li">{obj.prix}</td>
                                  <td className="li"><button onClick={()=>{
                                    confirmAlert({
                                      customUI: ({ onClose }) => {
                                      return (
                                      <div className='custom-ui'>
                                            
                                          <div class="card card-cascade wider reverse">
                                          <div className="row">
                                          <div className="col-md-9"></div>
                                          <div className="col-md-3"><button onClick={onClose} className="ferme">X</button></div>
                                          </div>
                                          <div class="view view-cascade overlay">       
                                          </div>       
                                          <div class="card-body card-body-cascade "> 
                                          <p class="card-text">
                                          <UpdGestion/>      
                                          </p>    
                                          </div>
                                          
                                          </div>
                                         
                                      </div>
                                      
                                      
                                      );
                                      
                                  }})
                                }}>Modifier</button>
                                  <button onClick={()=>{

                                  }}>supprimer</button>
                                  </td>
                                  {console.log(obj)}
                              </tr>

                          })) : ("")
                      }
                  </tbody>
              </table>
          </div>
          <div>
          <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-3">	<button className="btn btn-dark" id="boutons1" onClick={() => {
            document.getElementById("boutons").style.display = "none";
            document.getElementById("boutons1").style.display = "none";
            document.getElementById("formulaire").style.display = "none";
            window.print();
            document.getElementById("boutons").style.display = "block";
            document.getElementById("boutons1").style.display = "block";
            document.getElementById("formulaire").style.display = "block";
        }}>Imprimer</button></div>
          <div className="col-md-3">
          <button className="btn btn-primary " id="boutons" onClick={()=>{
            var total=0;
						for(let i=0;i<this.state.business.length;i++)
						{
							total+=parseInt(this.state.business[i].prix);
            }
            let a=[total]
					var nbr=new Intl.NumberFormat("es-ES");
					var pas=a.map(nbr.format);
						document.getElementById("total").innerHTML="TOTAL= "+pas+"$";
            console.log(total);
            
          }}>total</button>
          </div>
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
          < div className="videbe">
              {this.liste()}
          </div>
      );
  }
  }