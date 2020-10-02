import React from 'react'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'

export default function Contact() {
    return (
        <div>
            <Header/>
            <div className="col-md-6 offset-md-3">
                <ContactForm/>
            </div>
        </div>
    )
}
