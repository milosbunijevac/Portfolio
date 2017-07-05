import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/Head.jsx';
import Logos from './components/Logos.jsx';

class Index extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        <div className="container">
          <Head />
          <Logos />
        </div>
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index/>, document.getElementById('app'));