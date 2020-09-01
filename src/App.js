import React from "react";
import "./style.css";

class App extends React.Component{

  constructor(props){
    console.log('constructor()');
    super(props);
    this.state = {
      data:'small'
    }
  }

  handleClick = () =>{
    console.log('handleClick()');
    this.setState({
      data:'BIG'
    });
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate()');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate()');
    return null;
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render(){
    console.log('render()');
    return(
      <div>
        <h1>{ this.state.data }</h1>
        <button onClick={ this.handleClick }>Change Data</button>
      </div>
    );
  }
}

export default App;