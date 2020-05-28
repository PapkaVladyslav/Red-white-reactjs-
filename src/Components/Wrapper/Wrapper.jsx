import React from "react";
import {render} from "react-dom";
import "./Wrapper.scss";
import Jane from "../../assecs/images/wrapper/pic01.jpg";
import John from "../../assecs/images/wrapper/pic03.jpg"
import Janet from "../../assecs/images/wrapper/pic02.jpg"

export class Wrapper extends React.Component {

    render() {
      return (
        <div className="wrapper">
            <div className="container">
                <div className="inner">
                    <div className="special">
                        <h2>Faucibus consequat lorem</h2>
                        <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
                    </div>
                    <div className="testimonials d-flex justify-content-between">
                        <section className="one">
                            <div className="content">
                                <blockquote>
                                    <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                                </blockquote>
                                <div className="author d-flex">
                                    <div className="img">
                                        <img src={ Jane } />
                                    </div>
                                    <div className="text">
                                        <p><strong>- Jane Doe</strong> <span>CEO - ABC Inc.</span></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="two">
                            <div className="content">
                                <blockquote>
                                    <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                                </blockquote>
                                <div className="author d-flex">
                                    <div className="img">
                                        <img src={ John } />
                                    </div>
                                    <div className="text">
                                        <p><strong>- John Doe</strong> <span>CEO - ABC Inc.</span></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="three">
                            <div className="content">
                                <blockquote>
                                    <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                                </blockquote>
                                <div className="author d-flex">
                                    <div className="img">
                                        <img src={ Janet } />
                                    </div>
                                    <div className="text">
                                        <p><strong>- Janet Smith</strong> <span>CEO - ABC Inc.</span></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  render(
    <Wrapper />,
    document.getElementById('root')
  );