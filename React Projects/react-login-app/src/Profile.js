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
        //console.log(this.state)
        alert(JSON.stringify(this.state.profile))
    }
    handleCheckBox=(event)=> {
        let name = event.target.name;
        let value = event.target.value;
        //console.log(name+" "+check+" "+value);
        //this.setState({[name]:value})
        this.setState({profile:{
            ...this.state.profile,[name]:value
        }})

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
                <label>Gender</label>
        <input type="radio" name="gender" value="Male" onChange={this.handleChange}/>Male
        <input type="radio" name="gender" value="Female" onChange={this.handleChange}/>Female
                <br/>
                <label>SkillSet</label><br/>
        <input type="checkbox" name="tech" value="Java" onChange={this.handleCheckBox}/>Java
        <input type="checkbox" name="tech" value="Python" onChange={this.handleCheckBox}/>Python
        <input type="checkbox" name="tech" value="Angular" onChange={this.handleCheckBox}/>Angular
        <input type="checkbox" name="tech" value="React" onChange={this.handleCheckBox}/>ReactJS
        <br/>
        <label>City</label>
        <select name="city" onChange={this.handleChange}>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
        </select>
        <br/>
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/>
                </form>
            </div>
        )
    }
}

export default  Profile;