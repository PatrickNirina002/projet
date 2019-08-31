import React, { Component } from "react";
//import './Home.css';
import volo from './image3.jpeg';
import de from './image2.jpeg';
// import telo from './bureau.jpeg'
import { Animation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";

class PropoSlid extends Component {
  render() {
    return (
      <MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100 image" height='600px' src={volo} alt="First slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="3s">
                <h3 className="h3-responsive">"Equipement de la voiture est nécessaire."</h3>
               
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            
              <img className="d-block w-100 image" height='600px' src={de} alt="Second slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="3s">
                <h3 className="h3-responsive">"Nous proposons des plusieurs piéces  "</h3>
               
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    
    );
  }
}

export default PropoSlid;