import React, { Component } from 'react'
import axios from 'axios';
export default class FakeComponent extends Component {
    constructor(props){
        super(props);
        this.state={fakeData:[],f1:false}
    }
    loadData=()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos").
        then(result=>{
            if(result.status==200){
                //console.log(result.data);
                this.setState({fakeData:result.data});
            }
        }).catch(error=>console.log(error));
    }
    render() {
        let FakeRecord = this.state.fakeData.map(f=>
            <tr key={f.id}>
                <td>{f.userId}</td>
                <td>{f.id}</td>
                <td>{f.title}</td>
                <td>{f.completed?"Yes":"No"}</td>
            </tr>
            )
        return (
            <div>
            <input type="button" value="load Fake REST API " onClick={this.loadData}/> 
            <hr/>
            <table border="1">
                    <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                    </thead>
                    <tbody>
                    {FakeRecord}
                    </tbody>
            </table>   
            </div>
        )
    }
}
