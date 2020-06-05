import React from 'react';
import './form.style.css';

class Form extends React.Component{
    state={
        mName:"",
        email: "",
        message: ""
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };
    render(){
        return (
            <form autocomplete="off">
                <label for='mName'>Name:</label><br/>
                <input
                name='mName'
                type='text'
                placeholder="Your name" 
                value={this.state.name} 
                onChange={e => this.change(e)}/>
                
                <br/>
                
                <label for='email'>Email:</label><br/>
                <input
                name='email'
                type='email'
                placeholder="Your email" 
                value={this.state.name} 
                onChange={e => this.change(e)}/>
                
                <br/>
                
                <label for='message'>Message:</label><br/>
                <textarea
                name='message'
                rows='5'
                placeholder="Your message" 
                value={this.state.name} 
                onChange={e => this.change(e)}/>
                
                

            </form>
        )
    }
}

export default Form;