import React from 'react';
import Form from './components/form/form.component'

const Contact = () => {
    return (
        <div>
            <section className="contact">
                <div className='half-container'>
                    <h1 className='header'>Let's Make Something!</h1>
                    <h2 className='name'>Get in touch directly</h2>
                    <p className="right"></p>
                    <p>
                        <span className="phone">
                            <i class="fa fa-phone"></i><a className="c2action" href="tel:+8801836096182"> +88 01836096182</a>
                        </span>
                        <span className="email">
                            <i class="fa fa-envelope"></i><a className="c2action" href="mailto:abrar.chowdhury99@gmail.com"> abrar.chowdhury99@gmail.com</a>
                        </span>
                    </p>
                    <h2 className='subtitle'>Or just use the contact form below:</h2>
                    
                    <Form/>
                </div>
            </section>
        </div>
    );
};

export default Contact;