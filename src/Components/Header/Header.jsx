import React from "react";
import {render} from "react-dom";
import "./Header.scss";

export class Header extends React.Component {

    render() {
      return (
          <header className="header">
            <div className="header-content d-flex justify-content-between">
              <div className="left-side d-flex align-items-center">
                <a className="logo" herf="#">Industrios</a>
              </div>
              <div className ="wright-side d-flex align-items-center">
                <nav id="menu">
                  <input type="checkbox" id="check"/>
                  <label className="check"><i className="fas fa-bars" id="btn"></i><i className="fas fa-times" id="cancel"></i></label>
                  <div className="sidebar">
                    <ul>
                      
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </header>
      );
    }
  }
  
  render(
    <Header />,
    document.getElementById('root')
  );