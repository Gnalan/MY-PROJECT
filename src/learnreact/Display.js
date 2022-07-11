import React,{Component} from "react";

class Display extends Component{
    constructor(){
        super();
        this.state={name:"guna",age:"24"}
    }
    newname=()=>this.setState({name:"seelan",age:"22"})
    
   render(){
       return(
           <div>
               <h3>my name is {this.state.name} my age is {this.state.age}</h3>
               <button onClick={this.newname}>updatename</button>
           </div>
       )
   }


}
export default Display;