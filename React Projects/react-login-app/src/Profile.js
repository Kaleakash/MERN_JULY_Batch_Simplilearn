import React from 'react';
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={profile:[]}
    }
    handleChange=(event)=> {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({profile:{
            ...this.state.profile,[fieldName]:fieldValue
        }})
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        console.log(this.state)
    }
    render() {

        return(
            <div>
                <h2>Profile Details</h2>
                <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={this.handleChange}/><br/>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={this.handleChange}/><br/>
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/>
                </form>
            </div>
        )
    }
}

export default  Profile;