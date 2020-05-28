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
                <nav className="menu">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <a href="#Menu">Menu</a>
                  <div className="collapse">
                    <div className="bg" id="navbarToggleExternalContent">
                      <ul>
                        <li>Home</li>
                        <li>Elements</li>
                        <li>Generic</li>
                      </ul>
                    </div>
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