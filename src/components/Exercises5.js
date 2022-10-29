import React from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../index.css";

import MyImage1 from '../assets/leg1.gif';
import MyImage2 from '../assets/leg2.gif';
import MyImage3 from '../assets/leg3.gif';
import MyImage4 from '../assets/leg4.gif';


class Exercises extends React.Component {
  render() {
    const images = [
      {
        original: MyImage1,
      },
      {
        original: MyImage2,
      },
      {
        original: MyImage3,
      },
      {
        original: MyImage4,
      },
    ];
    return (
      <ImageGallery
        items={images}
        showBullets={true}
        showIndex={false}
        showThumbnails={false}
        lazyLoad={false}
        showPlayButton={false}
        showNav={false}
        showFullscreenButton={false}
        thumbnailPosition={"left"}
  
      />
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Exercises />, rootElement);

export default Exercises