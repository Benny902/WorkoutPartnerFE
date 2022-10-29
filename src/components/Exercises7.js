import React from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../index.css";

class Exercises extends React.Component {
  render() {
    const images = [
      {
        original: "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
      },
      {
        original: "http://d205bpvrqc9yn1.cloudfront.net/1160.gif",
      },
      {
        original: "http://d205bpvrqc9yn1.cloudfront.net/0501.gif",
      },
      {
        original: "http://d205bpvrqc9yn1.cloudfront.net/2612.gif",
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