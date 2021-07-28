import React from 'react';
let FirstComponent = ()=><div>First Component</div>
let SecondComponent = ()=><div>Second Component</div>
let ThirdComponent = ()=><div>Third Component</div>
class ConditionalComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {f1:true,f2:true,f3:true,c1:"First Component Hide"}
    }
    render() {
        return(
            <div>
                <h2>Conditional Rendering</h2>
                {this.state.f1 && <FirstComponent></FirstComponent>}
                <br/>
                {this.state.f2 && <SecondComponent></SecondComponent>}
                <br/>
                {this.state.f3 && <ThirdComponent></ThirdComponent>}
                <br/>
                <input type="button" value={this.state.c1} onClick={()=> {
                    if(this.state.f1){
                        this.setState({f1:false,c1:"First Component show"});
                    }else {
                        this.setState({f1:true,c1:"First Component hide"});
                    }
                }}/>
            </div>
        )
    }
}
export default  ConditionalComponent;