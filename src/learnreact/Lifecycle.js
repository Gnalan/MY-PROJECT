import React,{Component} from 'react';
class Lifecycle extends Component{
    constructor(){
        super();
        this.state={value:"welcome",name:"guna"}
    }

componentWillMount()
{
    alert("leran reactjs lifecycle")
}
render(){
    return <div>
        <h1>{this.state.value}{this.state.name}</h1>
        <br/>
        <button onClick={this.changevalue}>click value</button>
        <button onClick={this.deleteheader}>delete header</button>
    </div>
}
changevalue=()=>
{
    this.setState({value:"leran react in tamil"})
}
componentDidMount()
{
    setTimeout(()=>{
        this.setState({value:"thank you"})},5000)
    
}
componentWillUpdate()
{
    alert("do you want to update a new value")
}
componentDidUpdate(){
    document.getElementById("mydiv").innerHTML="NEW VALUE UPDATED SUCCESSFULLY"+this.state.value;
}
shouldComponentUpdate()
{
    return true;
}
deleteheader=()=>
{
    this.setState({value:false,name:false});
}
componentWillUnmount()
{
    alert("header deleted")
}
}
export default Lifecycle;