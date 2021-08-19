import React, { Component } from 'react'
import ProductStore from './ProductStore';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Product CRUD Operation</h2>
                <ProductStore></ProductStore>
            </div>
        )
    }
}
