import React from 'react';
class Students extends React.Component {
    constructor(props){
        super(props);
        this.state = {names:[]}
    }
    
    handleChange=(event)=> {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
    addNames=()=> {
        //1st way ES5 style 
        // let names = this.state.names;   // create local variable with same name as state variable.
        // names.push(this.state.stdName);           // do the operation 
        // this.setState({names});         // add that varible in setState 
        //2nd way ES6 style 
        this.setState({
            names:[...this.state.names,this.state.stdName]  // [copyOfArray,appendNewValue]
        })
    }
    deleteRec=(i)=> {
        //ES5 style 
        let names = this.state.names;
        names.splice(i,1);
        this.setState({names});
    }

    render() {
        let name = this.state.names.map((obj,i)=>
                                <div>{obj} 
                            <input type="button" value="Delete" 
                            onClick={()=>this.deleteRec(i)}/>
                                </div>)
    return(
            <div>
                <h2>Add Names</h2>
                <form>
                <label>Name</label>
                <input type="text" name="stdName" onChange={this.handleChange}/><br/>
                <input type="button" value="Add names" onClick={this.addNames}/>
                </form>
                <hr/>
                {name}
            </div>
        )
    }
}

export default Students;