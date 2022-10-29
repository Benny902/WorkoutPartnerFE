import React from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../index.css";

class Exercises extends React.Component {
  render() {
    const images = [
      {
        original: "http://d205bpvrqc9yn1.cloudfront.net/0978.gif",
      },
      {
        original: "http://d205bpvrqc9yn1.cloudfront.net/0299.gif",
      },
      {
        original: "http://d205bpvrqc9yn1.cloudfront.net/0290.gif",
      },
      {
        original: "http://d205bpvrqc9yn1.cloudfront.net/0310.gif",
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