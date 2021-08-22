import React, { Component } from 'react'
import axios from 'axios';
import RetreiveProductDetails from './RetreiveProductDetails'
export default class ProductStore extends Component {
    constructor(props){
        super(props);
        this.state = {_id:0,pname:"",price:0.0,msg:""}
        this.child = React.createRef();     // creating the reference of child component.
    }
    handleChange=(event)=> {
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        let product = this.state;
        //console.log(product);
        //1st parameter is url and 2nd parameter json data. 
        axios.post("http://localhost:9090/api/product/storeProductDetails",product).
        then(result=>{
            if(result.data.result == undefined){
                    this.setState({"msg":"Record inserted successfully"});
                    this.child.current.retrieveProdutDetails();
            }else {
                this.setState({"msg":"record didn't store"})
            }
        }).catch(error=>console.log(error));
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="form-group">
                <label>Product Id</label>
                <input type="text" name="_id" onChange={this.handleChange} className="form-control"/><br/>
                <label>Product Name</label>
                <input type="text" name="pname" onChange={this.handleChange} className="form-control"/><br/>
                <label>Product Price</label>
                <input type="text" name="price" onChange={this.handleChange} className="form-control"/><br/>
                <input type="submit" value="Store" className="btn btn-success"/>
                <input type="reset" value="reset" className="btn btn-secondary"/>    
            </form>     
            <br/>
            <span style={{'color':'red'}}>{this.state.msg}</span>
            <hr/>
            <RetreiveProductDetails ref={this.child}></RetreiveProductDetails>
            </div>
        )
    }
}
