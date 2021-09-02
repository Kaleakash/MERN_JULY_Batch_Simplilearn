import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {id:100,name:"Raj"}
  }
  changeValue=()=> {
    this.state({id:101,name:"Raj Deep"})
  }
  render() {
    return (
      <div>
        <h1>Welcome to React Testing</h1>
        <p>Name is {this.state.name}</p>
      </div>
    )
  }
}
