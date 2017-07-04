import React from 'react';

class Head extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <header>
          <div id="header-inner">
            <a href="index-html" id="logo"></a>
            <nav>
              <a href="#" id="menu-icon"></a>
              <ul>
                <li><a href="index.html" className="current">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Built Apps</a></li>
                <li><a href="#">About Me</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="banner">
          <div className="banner-inner">
            <img src="img/roadbanner.jpg"></img>
          </div>
        </section>
      </div>
    );
  }
}

export default Head;
