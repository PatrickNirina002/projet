import React, { Component } from 'react'
import PropoSlid from './propoSlid'
export default class Prop extends Component {
    render() {
        return (
            <div>
            <div class="card card-cascade wider reverse">

          
            <div class="view view-cascade overlay">
              <PropoSlid/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
          
          
 
            <div class="card-body card-body-cascade text-center">
          
         
            
            
              <h6 class="font-weight-bold indigo-text py-2">TOUTES LES PRESTATIONS POUR L’ENTRETIEN DE VOTRE AUTO</h6>
     
              <p class="card-text">
              Grâce au réseau des garages , obtenez une prestation de qualité effectuée à l’aide de l’expertise mécanique de nos réparateurs. 10% de remise sur votre seconde prestation. Nous assurons la mise en place d'un rendez-vous « sur-mesure » en fonction de vos besoins.
              Réalisez dès maintenant votre devis en ligne et obtenez un RDV pour la réparation de votre voiture.
              </p>
          
        
          
            </div>
          
          </div>
     
            </div>
            </div>
        )
    }
}
