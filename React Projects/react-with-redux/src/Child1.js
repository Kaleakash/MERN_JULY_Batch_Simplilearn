import React, { Component } from 'react'
import {connect} from 'react-redux';
class Child1 extends Component {
    render() {

        return (
            <div>
                <h2>Child1 Component </h2>
            <p>Emp id is {this.props.id}, Name is {this.props.name}
            Salary is {this.props.salary}</p>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return{
        id:state.id,
        name:state.name,
        salary:state.salary
    }
}
export default connect(mapStateToProps)(Child1);
