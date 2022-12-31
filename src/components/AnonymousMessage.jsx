import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, AlertTitle } from '@mui/material';

export default function AnonymousMessage() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setIsSent(true);
                    setIsShow(true);
                    document.getElementById('anonymous_textarea').innerHTML = '';
                    setText('');
                },
                (error) => {
                    setIsSent(false);
                    setIsShow(true);
                    setMessage(error.text)
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="anonymous_section">
            <label className="anonymous_label">Message</label>
            <textarea
                name="message"
                className="anonymous_textarea"
                placeholder="Write your message here ..."
                id="anonymous_textarea"
                onChange={event => setText(event.target.value)}
                value={text}
            />
            <input type="submit" value="Send" className="anonymous_button" />
            {
                isShow ? isSent ? <Alert variant="filled" severity={'success'} onClose={() => {setIsShow(false)}}><AlertTitle>Success</AlertTitle>
                Your message has been sent successfully</Alert> : <Alert variant="filled" severity={'error'} onClose={() => {setIsShow(false)}}><AlertTitle>Failed</AlertTitle>{message}</Alert> : null
            }
        </form>
    );
}
