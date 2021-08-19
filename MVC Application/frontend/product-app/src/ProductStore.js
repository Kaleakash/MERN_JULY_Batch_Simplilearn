import React, { Component } from 'react'

export default class ProductStore extends Component {
    constructor(props){
        super(props);
        this.state = {_id:0,pname:"",price:0.0}
    }
    handleChange=(event)=> {
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        let product = this.state;
        console.log(product);
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Product Id</label>
                <input type="text" name="_id" onChange={this.handleChange}/><br/>
                <label>Product Name</label>
                <input type="text" name="pname" onChange={this.handleChange}/><br/>
                <label>Product Price</label>
                <input type="text" name="price" onChange={this.handleChange}/><br/>
                <input type="submit" value="Store"/>
                <input type="reset" value="reset"/>    
            </form>     
            </div>
        )
    }
}
