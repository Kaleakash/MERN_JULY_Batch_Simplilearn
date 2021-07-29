import React, { Component } from 'react'
import axios from 'axios';
export default class EmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {employees:[],id:0,name:"",age:0,msg:""}
    }
    storeEmployeeRec=(event)=> {

    }
    retrieveEmployeeRec=(event)=> {
        axios.get("http://localhost:3001/employees").then(result=> {
            if(result.status==200){
                this.setState({employees:result.data})
            }
        }).catch(error=>console.log(error));
    }
    handleChange=(event)=> {
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        let emp = {id:this.state.id,name:this.state.name,age:this.state.age};
        //console.log(emp);
        // post method is use to store the data 
        // it take 2 parameter 1st URL and 2nd json data. 
        axios.post("http://localhost:3001/employees",emp).
        then(result=>{
            if(result.statusText=="Created"){
                this.setState({"msg":"Record inserted successfully"})
            }
        }).catch(error=>this.setState({"msg":"Record didn't store"}));

    }
    render() {
    let EmpRec = this.state.employees.map(e=>
        <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
        </tr>
    )
        return (
            <div>
            <h2>Store Employee Records</h2>
            <form onSubmit={this.handleSubmit}>
            <label>Id</label>
            <input type="text" name="id" onChange={this.handleChange}/><br/>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange}/><br/>
            <label>Age</label>
            <input type="text" name="age" onChange={this.handleChange}/><br/>
            <input type="submit" value="Store Record"/>
            <input type="reset" value="reset"/>
            <input type="button" value="Load Data" onClick={this.retrieveEmployeeRec}/>
            </form>       
            <br/>
            {this.state.msg} 
            <hr/>
            <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                    {EmpRec}
                    </tbody>
            </table>
            </div>
        )
    }
}
