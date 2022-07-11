import React,{Component} from "react";
class Login extends Component {
    render(){
        return(
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <form>
                        <div class="form-group">
                            <h1 style={{color:"white",textAlign:"center"}}>Login</h1>
                            <label class="skills" for="Subject">
                                Username
                            </label>
                            <input 
                            type="text"
                            id="username"
                            class="form-control"
                            required
                            />
                        </div>
                        <div>
                            <label class="skills" for="Body">
                                Password
                            </label>
                            <input type="password" id="pwd" required class="form-control"/>
                        </div><br/>
                        <input
                        type="submit"
                        value="Login"
                        id="navigation"
                        class="btn btn primary"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;
