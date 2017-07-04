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
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Head;
