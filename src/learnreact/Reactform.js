import React,{Component} from "react";
class Reactform extends Component{
    constructor(){
        super();
        this.state={username:"",age:null,errmsg:""};
    }
    uservalue=(event)=>{
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n=="age"){
            if(v!=""&& !Number(v))
            {
                err =<strong>Invalid value age must be a number</strong>
            }
        }
        
    
    this.setState({errmsg:err});
    this.setState({[n]:v});
    }
    formsubmit=(event)=>{
        event.preventDefault();
        alert("your name"+ this.state.username);
    }
render(){
    return(
        <form>
            <h1>Hello{this.state.username}</h1>
            <h2>your age{this.state.age}</h2>
            Enter your name:<input type="text" name="usernamw" onChange={this.uservalue}/>
            Enter your age:<input type="text" name="age" onChange={this.uservalue}/>{this.state.errmsg}
            <input type="sybmit"/>
        </form>
    )
}

}
export default Reactform;
