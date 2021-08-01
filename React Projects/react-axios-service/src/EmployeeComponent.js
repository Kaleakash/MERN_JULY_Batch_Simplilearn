import React, { Component } from 'react'
import axios from 'axios';
export default class EmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {employees:[],id:0,name:"",age:0,msg:""}
    }
    storeEmployeeRec=(event)=> {

    }
    componentDidMount(){
        console.log("component did mount")
        this.retrieveEmployeeRec();
    }
    // componentDidUpdate() {
    //     console.log("component did update")
    // }
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
                this.retrieveEmployeeRec();
            }
        }).catch(error=>this.setState({"msg":"Record didn't store"}));

    }
    deleteRec=(id)=> {
        axios.delete("http://localhost:3001/employees/"+id).
        then(result=>{
            if(result.status==200){
                this.retrieveEmployeeRec();
            }
        }).catch(error=>console.log(error));
    }
    render() {
    let EmpRec = this.state.employees.map(e=>
        <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td><input type="button" value="Delete Rec" 
            onClick={()=>this.deleteRec(e.id)} className="btn btn-danger"/></td>
        </tr>
    )
        return (
            <div className="container">
            <h2>Store Employee Records</h2>
            <form onSubmit={this.handleSubmit} className="form-group">
            <label>Id</label>
    <input type="text" name="id" onChange={this.handleChange} className="form-control"/><br/>
            <label>Name</label>
    <input type="text" name="name" onChange={this.handleChange} className="form-control"/><br/>
            <label>Age</label>
            <input type="text" name="age" onChange={this.handleChange} className="form-control"/><br/>
            <input type="submit" value="Store Record" className="btn btn-success"/>
            <input type="reset" value="reset" className="btn btn-info"/>
            </form>       
            <br/>
            {this.state.msg} 
            <hr/>
            <table border="1" className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Delete Record</th>
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
