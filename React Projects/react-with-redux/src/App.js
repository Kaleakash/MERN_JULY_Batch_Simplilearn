import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux';

import Child1 from './Child1';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {sal:0}
  }
  
  handleChange=(event)=> {
    this.setState({[event.target.name]:event.target.value});
  }
  render() {
    return (
      <div>
        <h2>React with Redux</h2>
        
        Salary <input type="text" name="sal" onChange={this.handleChange}/><br/>
<input type="button" value="increment Salary" onClick={()=>this.props.increment(this.state.sal)}/>
<input type="button" value="decrement Salary" onClick={()=>this.props.decrement(this.state.sal)}/>
        <br/>
        <h3>Global State variable </h3>
        <p>id is {this.props.emp_id} Name is {this.props.emp_name}, Salary is {this.props.emp_salary}</p>
        <Child1></Child1>
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return{
    emp_id:state.id,
    emp_name:state.name,
    emp_salary:state.salary
  }
}
const mapDispatchToProps = (dispatch)=> {
  return{
    increment:(sal)=>dispatch({type:"INCREMENT",payload:sal}),
    decrement:(sal)=>dispatch({type:"DECREMENT",payload:sal})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);   // connecting app component to store 

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {id:100,name:"Raj",salary:12000}
//   }
//   incrementSalary=()=> {
//     this.setState({salary:this.state.salary+1000})
//   }
//   decrementSalary=()=> {
//     this.setState({salary:this.state.salary-1000})
//   }
//   render() {
//     return (
//       <div>
//         <h2>Change Salary of Employee without Redux</h2>
//         <p>Id is {this.state.id}, Name is {this.state.name} and Salary is {this.state.salary}</p>
//         <input type="button" value="Increment Salary" onClick={this.incrementSalary}/>
//         <input type="button" value="Decrement Salary" onClick={this.decrementSalary}/>
//       </div>
//     )
//   }
// }

