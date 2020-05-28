import React from "react";
import {render} from "react-dom";
import "./Content.scss";
import contactcard from "../../assecs/images/Content/contactcard.png";
import plane from "../../assecs/images/Content/paper-plane.png";
import diskette from "../../assecs/images/Content/diskette.png";
import bars from "../../assecs/images/Content/bars.png";
import papper from "../../assecs/images/Content/two-paper.png";
import code from "../../assecs/images/Content/qr-code.png";

export class Content extends React.Component {
    render() {
      return (
          <div className="Content">
            <div className="container">
              <div className="special">
                <h2>Sem turpis amet semper</h2>
                <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
              </div>
              <div className="highlights d-flex justify-content-between">
                <div className="cards-cont">
                  <div className="inside">
                    <div className="up">
                      <img src={ contactcard } />
                      <h3>Feugiat consequat</h3>
                    </div>
                    <div className="down">
                      <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                    </div>
                  </div>
                </div>
                <div className="cards-papper">
                  <div className="inside">
                    <div className="up">
                      <img src={ papper } />
                      <h3>Ante sem integer</h3>
                    </div>
                    <div className="down">
                      <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                    </div>
                  </div>
                </div>
                <div className="cards-disk">
                  <div className="inside">
                    <div className="up">
                      <img src={ diskette } />
                      <h3>Ipsum consequat</h3>
                    </div>
                    <div className="down">
                      <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlights_2 d-flex justify-content-between">
                <div className="cards-bars">
                  <div className="inside">
                    <div className="up">
                      <img src={ bars } />
                      <h3>Interdum gravida</h3>
                    </div>
                    <div className="down">
                      <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                    </div>
                  </div>
                </div>
                <div className="cards-plane">
                  <div className="inside">
                    <div className="up">
                      <img src={ plane } />
                      <h3>Faucibus consequat</h3>
                    </div>
                    <div className="down">
                      <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                    </div>
                  </div>
                </div>
                <div className="cards-code">
                  <div className="inside">
                    <div className="up">
                      <img src={ code } />
                      <h3>Accumsan viverra</h3>
                    </div>
                    <div className="down">
                      <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
  }
  
  render(
    <Content />,
    document.getElementById('root')
  );