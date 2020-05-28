import React from "react";
import {render} from "react-dom";
import "./Banner.scss";
import video from "../../assecs/video/banner.mp4"

export class Banner extends React.Component {
    render() {
      return (
          <div className="banner">
            <div className="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
              <source src={ video } type="video/mp4" />
            </video>
            <div className="container h-100">
              <div className="d-flex h-100 text-center align-items-center">
                <div className="inner w-100 text-white">
                  <h1 className="display-3">Industrious</h1>
                  <p className="lead mb-0">A responsive business oriented template with a video background<br/> designed by <a className="templated" href="#">TEMPLATED</a> and released under the Creative Commons License.</p>
                </div>
              </div>
            </div>
          </div>
          
      );
    }
  }
  
  render(
    <Banner />,
    document.getElementById('root')
  );