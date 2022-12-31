import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function AnonymousMessage() {
    const form = useRef();

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
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
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
            />
            <input type="submit" value="Send" className="anonymous_button" />
        </form>
    );
}
