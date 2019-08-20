
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Gest from './gest';
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:8080'+this.props.location.pathname)
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }





    liste() {
      return <div>
      <div>
      <Gest/>
     </div>
          <div className="table-responsive">
              <table class="table table-bordered" style={{ marginTop: 20 }}>
                  <thead>
                      <tr>
                          <th className="li">Numero</th>
                          <th className="li">Nom de propriétaire</th>
                          <th className="li">Type de réparation</th>
                          <th className="li">Prix</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          (this.state.business.length > 0) ? (this.state.business.map((obj) => {
                              return <tr key={obj._id}>
                                  <td className="li">{obj.matricule}</td>
                                  <td className="li">{obj.nom_pro}</td>
                                  <td className="li">{obj.type_rep}</td>
                                  <td className="li">{obj.prix}</td>
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
          <div className="col-md-3">
          <button className="btn btn-primary" onClick={()=>{
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
          <div>
              {this.liste()}
          </div>
      );
  }
  }