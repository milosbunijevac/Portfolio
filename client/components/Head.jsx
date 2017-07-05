import React from 'react';

class Head extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <section>

          <img src="../img/roadbanner.jpg" className="profile-img"></img>
          <header>
            <h2>Hello, <br/> my name is <strong>Milos Bunijevac</strong> and I am a web developer.</h2>
          </header>

        </section>

      </div>
    );
  }
}

export default Head;
