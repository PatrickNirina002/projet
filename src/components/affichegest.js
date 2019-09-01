
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
      this.state = {business: [],recherche:""};
      this.onChange = this.onChange.bind(this)  
    }
    onChange(event) {
      this.setState({
          [event.target.name]: event.target.value.toUpperCase()
          
          
       
      })
      console.log(this.state.recherche);
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
    <div className="row">
    <div className="col-md-6"></div>  
    <div className="col-md-6"><input type="text" name="recherche"  id="rech"  class="form-control toto" value={this.state.recherche} onChange={this.onChange} placeholder="Entrer le numéro matricule"/></div></div>
          <div className="table-responsive">
              <table class="table table-bordered" style={{ marginTop: 20 }}>
                  <thead className="thead-dark">
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
                          (this.state.business.length > 0) ? (this.state.business.filter((params)=>params.matricule.indexOf(this.state.recherche) !==-1).map((obj,index) => {
                              return <tr key={obj._id}>
                                  <td className="li" onClick={()=>{
                                    console.log(obj._id);
                                    
                                    localStorage.setItem('idGest',obj._id)
                                  }}>{obj.matricule.toUpperCase()}</td>
                                  <td className="li">{obj.nom_pro}</td>
                                  <td className="li">{obj.type_rep}</td>
                                  <td className="li">{obj.prix}</td>
                                  <td className="li"><div className="row"><div className="col-md-4"><button onClick={()=>{
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
                                }} class="btn btn-primary">Modifier</button></div>
                                <div className="col-md-4"> <button class="btn btn-danger" onClick={()=>{
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
                                          <p>cofirmer la suppresion</p>    
                                          <button onClick={()=>{
                                            axios.delete('https://finaly-s.herokuapp.com/deleteGestion/'+obj._id)
                                          }} className="btn btn-danger">ok</button> 
                                          </p>    
                                          </div>
                                          
                                          </div>
                                         
                                      </div>
                                      
                                      
                                      );
                                      
                                  }})
                                  }}>supprimer</button></div></div>
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
          <div className="col-md-3"></div>
          <div className="col-md-3">	<button className="btn btn-dark" id="boutons1" onClick={() => {
            document.getElementById("boutons").style.display = "none";
            document.getElementById("boutons1").style.display = "none";
            document.getElementById("formulaire").style.display = "none";
            document.getElementById("bou").style.display = "none";
            document.getElementById("rech").style.display = "none";
            window.print();
            document.getElementById("boutons").style.display = "block";
            document.getElementById("boutons1").style.display = "block";
            document.getElementById("formulaire").style.display = "block";
            document.getElementById("bou").style.display = "none";
            document.getElementById("rech").style.display = "none";
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
            
          }}>total</button></div>
          <div className="col-md-3"><button id="bou" className="btn btn-warning" onClick={()=>{
            for(let i=0;i<this.state.business.length;i++){
              for(let j=i+1;j<this.state.business.length;j++){
                if(this.state.business[i].matricule==this.state.business[j].matricule){
                  this.state.business[i].prix+=this.state.business[j].prix
                  this.state.business.splice(j,1)
                      
                      
                }
              }
            
              
            }


            function copie(obj){
              var copie=Object.create(Object.getPrototypeOf(obj));
              var propNames=Object.getOwnPropertyNames(obj);
              propNames.forEach(function(nom){
                var desc=Object.getOwnPropertyDescriptor(obj,nom);
                Object.defineProperty(copie,nom,desc)
              })
              return copie;
            }
            
          var fidel1 = copie( this.state.business);
          fidel1.sort(function(a,b){return b.prix - a.prix})
          console.log(fidel1);
          if (typeof(fidel1[0])!= "undefined"){
          document.getElementById("fidel").innerHTML="CLIENT PLUS DE DEPENSE : "+fidel1[0].matricule.toUpperCase()+", Appartenant à "+fidel1[0].nom_pro+" avec un prix de: "+fidel1[0].prix+" $"
          } else {document.getElementById("total").innerHTML="Aucun enregistrement"}
        



            // var tab=[]
            // this.state.business.map(pri=>{
            //   tab.push(pri.prix,pri.matricule)
            // })
            // console.log(tab.sort((a,b)=>b-a)[0]); 
            // document.getElementById("total").innerHTML="TOTAL= "+(tab.sort((a,b)=>b-a)[0])+"$";
          }}>fidelite</button></div>
          </div>
          </div>
         
          <div className="row">
          <div className="col-md-9"></div>
          <div className="container  col-md-3 li"><p className="row ss"><span id="total">&nbsp;&nbsp;</span></p></div>
          </div>
          <p id="fidel"></p>
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