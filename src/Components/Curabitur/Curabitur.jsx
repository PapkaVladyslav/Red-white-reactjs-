import React from "react";
import {render} from "react-dom";
import "./Curabitur.scss";

export class Curabitur extends React.Component {
    render() {
      return (
          <div className="curabitur">
              <div className="container">
                <div className="inner">
                    <h2>Curabitur ullamcorper ultricies</h2>
                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
                </div>
              </div>
          </div>
      );
    }
  }
  
  render(
    <Curabitur />,
    document.getElementById('root')
  );