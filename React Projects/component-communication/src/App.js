import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import React, { Component } from 'react'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {parentName:"Ajay Kumar",parentAge:45,childName:""}
  }
  receiveChildData=(data)=>{
    //console.log(data);
    this.setState({childName:data});
  }
  render() {
    return (
      <div>
       <h1>Parent Component</h1>
       <p>Name is in parent component is {this.state.parentName}</p>
       <p>Child name in parent component JSX is {this.state.childName}</p>
       <Child1 ParentToChild={this.state.parentName} 
       ParentToChildAge={this.state.parentAge}
       childToParent={this.receiveChildData}>
         </Child1>        
      </div>
    )
  }
}



