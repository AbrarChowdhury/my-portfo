import React from 'react';
import './form.style.css';
import axios from 'axios'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            clientName:"",
            email: "",
            message: ""    
        }
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        const data = this.state
        console.log(data);
        axios.post('http://localhost:9000/send', data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    };
    render(){
        return (
            <form autocomplete="off" onSubmit = {this.onSubmit}>
                <label for='clientName'>Name:</label><br/>
                <input
                name='clientName'
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
                <br/>

                <button type='submit' className="form-button">Submit</button>
            </form>
        )
    }
}

export default Form;