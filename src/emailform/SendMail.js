import React,{Component} from 'react';
class SendMail extends Component{
    constructor(){
        super();
        this.state={subject:"",body:""};
    }
    validateForm=event=>{
        var subject=document.getElementById("subject").value;
        var body=document.getElementById("body").value;
        window.location.href="mailto:guna4gseelan@gmail.com?subject="+subject+"&body="+body;
        event.preventDefault();
        return false;
    }
    render(){
        return(
            < div class="heading">
                <h1 style={{textAlign:"center",color:"white"}}>Mail Form</h1>
                <div class="container" id='mailme'>
                <div class="row">
                <div class="col sm-8 offset-md-2">
                    <form class="justify-content-center" onSubmit={this.validateForm} target="_blank" method='GET'>
                        <div class="form-group from-group-lg">
                            <label class="skills" for="subject">
                                <strong style={{textAlign:"center",color:"white"}}>Name</strong>
                            </label>
                            <input type="text" id='subject' class="form-control" required/>
                        </div>
                        <div class="form-group from-group-lg">
                            <label class="skills" for="Body">
                                <strong style={{textAlign:"center",color:"white"}}>Feedback</strong>
                            </label>
                            <textarea id='body' class="form-control" rows="5" required/>
                        </div>
                        <input type="submit" value="send" id='navigation' class="btn btn-primary"/>
                    </form>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default SendMail;