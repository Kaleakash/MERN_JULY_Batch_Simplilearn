import React, { Component } from 'react'

export default class Child1 extends Component {
    
    constructor(props){
        super(props);
        this.state = {childName:"Raj"}
        // we can pass the value from child component to parent component
        // from constructor or life cycle or user-defined function with events.
        this.props.childToParent(this.state.childName); 
    }

    render() {
        return (
            <div>
                <h1>Child1 Component</h1>
                <p>Parent name in child component jsx is {this.props.ParentToChild}
                and age is {this.props.ParentToChildAge}</p>
                <p>Child name is child component jsx is {this.state.childName}</p>
            </div>
        )
    }
}
