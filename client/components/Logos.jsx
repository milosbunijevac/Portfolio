import React from 'react';

class Logos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="row logoRow">
          <div className="col-md-2">
            <img src="../img/reactlogo.png"></img>
          </div>
          <div className="col-md-2">
            <img src="../img/pythonlogo.png"></img>
          </div>
          <div className="col-md-2">
            <img src="../img/angularlogo.png"></img>
          </div>
          <div className="col-md-2">
            <img src="../img/awslogo.png"></img>
          </div>
          <div className="col-md-2">
            <img src="../img/nodelogo.jpg"></img>
          </div>
          <div className="col-md-2">
            <img src="../img/mysqllogo.jpg"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Logos;
