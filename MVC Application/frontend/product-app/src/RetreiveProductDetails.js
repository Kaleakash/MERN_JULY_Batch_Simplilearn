import React, { Component } from 'react'
import axios from 'axios';

export default class RetreiveProductDetails extends Component {
    constructor(props){
        super(props);
        this.state = {product:[]}
    }
    componentDidMount() {
            this.retrieveProdutDetails();
    }
    retrieveProdutDetails=()=> {
        axios.get("http://localhost:9090/api/product/getProductDetails").then(result=>{
            //console.log(result.data)
            this.setState({product:result.data});           // data loaded in product state variable. 
        }).catch(error=>console.log(error));
    }
    deleteRec =(pid)=> {
        //console.log("Delete function called.."+pid);
        axios.delete("http://localhost:9090/api/product/deleteProductDetails/"+pid).
        then(result=>{
                console.log(result);
                this.retrieveProdutDetails();
        }).catch(error=>console.log(error));
    }
    render() {
        let productRec = this.state.product.map(p=> 
            <tr key={p._id}>
                    <td>{p._id}</td>
                    <td>{p.pname}</td>
                    <td>{p.price}</td>
                    <td>
        <input type="button" value="Delete Rec" className="btn btn-info" onClick={()=>this.deleteRec(p._id)}/>
                    </td>
            </tr>
        )
        return (
            <div>
                <h2>Product Details</h2>
                <table border="1" className="table">
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Delete Product</th>
                            </tr>    
                        </thead>    
                        <tbody>
                            {productRec}
                        </tbody>
                </table>              
            </div>
        )
    }
}
