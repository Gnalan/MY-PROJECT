import React, {Component} from "react";
class SignUpForm extends Component
{
    constructor(){
        super();
        this.state={username:"",
                    pno:null,
                    errmsg:""};
    }
    // validation usevalue la
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err=""
        if(n==="pno"){
            if(v!=="" && !Number(v))
            {
                err=<strong>Invalid value, Enter the number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    render()
    {
        return(
            <form class="was-validated container ">
                <div class="form-group">
                    <h1 style={{textAlign:"center",color:"white"}}>Registration Form</h1>
                    <label for="uname">Username</label>
                    <input type="text" class="form-control" id="uname" onChange={this.uservalue} placeholder="Enter username" name="username" required/>
                </div>
                <div class="form-group">
                    <label for="uname">Phone number</label>
                    <input type="text" class="form-control" id="pno" onChange={this.uservalue}placeholder="Enter phone number" name="pno" required/>{this.state.errmsg}
                    </div>
                    <div class="form-group">
                    <label for="pwd">Password</label>
                    <input type="text" class="form-control" id="pwd" placeholder="Enter password number" name="pswd" required/>
                    </div>
                    <div class ="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" required/> I agree the Terms and Condition.
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
             </form>
        )}
    }
    
export default SignUpForm;