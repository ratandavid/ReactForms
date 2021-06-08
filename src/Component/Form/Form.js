import React from 'react';
import './form.css'


class Form extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:'',
            confirmpass:''
          };
        this.handleEmailchange = this.handleEmailchange.bind(this);
        this.handlePasswordchange = this.handlePasswordchange.bind(this);
        this.handleConfirmPasswordchange = this.handleConfirmPasswordchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleEmailchange(event) {
        this.setState({
            email:event.target.value
        });
    }

    handlePasswordchange(event){
        this.setState({
            password:event.target.value
        });
    }
    
    handleConfirmPasswordchange(event){
        this.setState({
            confirmpass:event.target.value
        });
    }
    
    handleSubmit(event){
        
        alert(`${this.state.email} ${this.state.password} ${this.state.confirmpass}`);
        event.preventDefault();
    }
    

    render(){
            
        return(
            <div className="Form">
            <h1> Login Page </h1>    
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={this.state.email} className="form-control" onChange={this.handleEmailchange} placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordchange} placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" value={this.state.confirmpass} onChange={this.handleConfirmPasswordchange}  placeholder="Confirm Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>  
            </div>
            );
    }
}

export default Form;