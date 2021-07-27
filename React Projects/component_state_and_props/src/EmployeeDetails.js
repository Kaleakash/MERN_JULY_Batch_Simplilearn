import React from 'react';
import ProjectDetails from './ProjectDetails';
class EmployeeDetails extends React.Component{
    
    constructor(props){
        super(props); // this code is use to call super class ie Componet constructor
        this.state={name:"Ajay Kumar",age:21};  // syntax to create the state. 
    }                       

    render() {


        return(
            <div>
                <h2>Employee Component</h2>
                <h3>State variable value is </h3>
                <p> Name is {this.state.name} and Age is {this.state.age}</p>
                <h3>Props value is </h3>
                <p> Designation is {this.props.desg} and City is {this.props.city} </p>
                <ProjectDetails pname="Web" tech="React JS"></ProjectDetails>
                <ProjectDetails pname="Desktop" tech="Java"></ProjectDetails>
                <ProjectDetails pname="Mobile" tech="Android"></ProjectDetails>
            </div>
        )
    }
}

export default EmployeeDetails;