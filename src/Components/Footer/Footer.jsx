import React from "react";
import {render} from "react-dom";
import "./Footer.scss";

export class Footer extends React.Component {

    render() {
      return (
        <footer>
            <div className="inner">
                <div className="container">
                    <div className="content d-flex justify-content-between">
                        <div className="accumsan">
                            <h3>Accumsan montes viverra</h3>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
                        </div>
                        <div className="sem">
                            <h4>Sem turpis amet semper</h4>
                            <ul>
                                <li className="one"><a href="#">Dolor pulvinar sed etiam.</a></li>
                                <li className="two"><a href="#">Etiam vel lorem sed amet.</a></li>
                                <li className="three"><a href="#">Felis enim feugiat viverra.</a></li>
                                <li className="four"><a href="#">Dolor pulvinar magna etiam.</a></li>
                            </ul>
                        </div>
                        <div className="magna">
                            <h4>Magna sed ipsum</h4>
                            <ul>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Github</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© Untitled. Photos <a href="https://unsplash.co">Unsplash</a>, Video <a href="https://coverr.co">Coverr</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
      );
    }
  }
  
  render(
    <Footer />,
    document.getElementById('root')
  );