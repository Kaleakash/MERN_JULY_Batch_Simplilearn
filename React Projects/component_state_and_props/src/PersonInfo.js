import React from 'react';
class PersonInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {pid:100,name:"Raj",age:21};
        this.fun1 = this.fun1.bind(this);   // bind to react component
    }
    // we can't access setState function in normal function because 
    // this function didn't bind the react component 
    fun1() {
        console.log("Event fired...")
        this.setState({name:"Raj Kumar",age:25});
    }
    // arrow style funtion no need to bind in constructor
    fun2=()=> {
        this.setState({name:"Raj Deep",age:27});
    }
    render() {
        return(
            <div>
                <h2>Person Component change state using Event</h2>
<p>Person Id is {this.state.pid}, Person Name {this.state.name} age is {this.state.age}</p>
                <br/>
                <input type="button" value="Click Here" onClick={this.fun1}/>
                <input type="button" value="Click Here" onClick={this.fun2}/>
            </div>
        )
    }
}
export default PersonInfo;