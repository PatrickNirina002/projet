import React, { Component } from "react";
//import './Home.css';
import volo from './bureau.jpg';
import de from './ato3.jpg';
// import telo from './bureau.jpeg'
import { Animation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";

class Slider extends Component {
  render() {
    return (
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100 image" height='600px' src={volo} alt="First slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
           
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            
              <img className="d-block w-100 image" height='600px' src={de} alt="Second slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
          
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100 image" src={de} height='600px'  width="700px" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
        
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100 image" height='600px' src={de} alt="Burnedforest" />
              <MDBMask overlay="black-slight" />
            </MDBView>
           
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    
    );
  }
}

export default Slider;