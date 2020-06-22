import React from 'react';
import './form.style.css';
import axios from 'axios'
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos'; 
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            clientName:"",
            email: "",
            message: "",
            isSent: false
        }
        AOS.init(); 
    }
    change = e => {
        this.setState({
            isSent: false,
            [e.target.name]: e.target.value,
        });
    };
    clearState = () =>{
        this.setState({
            isSent: true, 
        });
    }


    modal = (text) => {
        alert(text)
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        const data = this.state
        this.clearState()
        axios.post('https://portfolio-contact-api.herokuapp.com/send', data)
            .then((response) => {
                console.log('success:',response);
            },(error) => {
                console.log("error: ",error);
                this.clearState()
            }) 
                    
    };
    render(){

        return (
            <div className="aos-item"  data-aos-mirror="true" data-aos="zoom-in-left" data-aos-duration="1000">
            {this.state.isSent? <h1 className="flicker-1" >Got your message, will get back to you ASAP.</h1>:<h1 className="hide"></h1>}
            <form autocomplete="off" onSubmit = {this.onSubmit}>
                <label for='clientName'>Name:</label><br/>
                <input
                name='clientName'
                type='text'
                placeholder="Your name" 
                required
                value={this.state.isSent ? '' : this.state.name} 
                onChange={e => this.change(e)}/>
                
                <br/>
                
                <label for='email'>Email:</label><br/>
                <input
                name='email'
                type='email'
                placeholder="Your email" 
                required
                value={this.state.isSent ? '' : this.state.name} 
                onChange={e => this.change(e)}/>
                
                <br/>
                
                <label for='message'>Message:</label><br/>
                <textarea 
                name='message'
                rows='5'
                placeholder="Your message"
                required 
                value={this.state.isSent ? '' : this.state.name} 
                onChange={e => this.change(e)}/>
                <br/>

                <button type='submit' className="form-button">Submit</button>
            </form>
            </div>
        )
    }
}

export default Form;