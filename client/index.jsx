import React from 'react';
import ReactDOM from 'react-dom'

class Index extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        <h1>Hello World </h1>
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index/>, document.getElementById('app'));