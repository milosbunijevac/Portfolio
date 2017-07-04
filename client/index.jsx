import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/Head.jsx';

class Index extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        <Head />
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index/>, document.getElementById('app'));