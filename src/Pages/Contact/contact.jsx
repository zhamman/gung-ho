import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    if (values.name && values.subject && values.email && values.message) {
      setValid(true);
      emailjs
        .sendForm(
          "service_npet1q3",
          "template_r7kqs7e",
          form.current,
          "6ui12PVwjaRzGOvRa"
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
    }
    setSubmitted(true);
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleName = e => {
    setValues({ ...values, name: e.target.value });
  };
  const handleEmail = e => {
    setValues({ ...values, email: e.target.value });
  };
  const handleSubject = e => {
    setValues({ ...values, subject: e.target.value });
  };
  const handleMessage = e => {
    setValues({ ...values, message: e.target.value });
  };
  const handleSubmit = e => {
    if (values.name && values.subject && values.email && values.message) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <>
      <div className="contact-container">
        <div className="left-side">
          <h1>
            Let's <div /> Work <div /> Together!
          </h1>
        </div>
        <div className="right-side">
          <div className="form-container">
            {submitted && valid ? (
              <div className="success-message">
                <h1>
                  Thank You for reaching out! <div /> we will be in touch.
                </h1>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <div className="register-form">
                  <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                      onChange={handleName}
                      value={values.name}
                      className="form-field"
                      type="text"
                      name="name"
                      id="name"
                      //   placeholder="Name"
                    />
                    {submitted && !values.name ? (
                      <span>Please enter a name </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email Address</label>
                    <input
                      onChange={handleEmail}
                      value={values.email}
                      className="form-field"
                      type="text"
                      name="email"
                      id="email"
                      //   placeholder="Email"
                    />
                    {submitted && !values.email ? (
                      <span>Please enter an email address</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Subject</label>
                    <input
                      onChange={handleSubject}
                      value={values.subject}
                      className="form-field"
                      type="text"
                      name="subject"
                      id="subject"
                      //   placeholder="Subject"
                    />
                    {submitted && !values.subject ? (
                      <span>Please enter a subject</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea
                      onChange={handleMessage}
                      value={values.message}
                      type="text"
                      name="message"
                      id="message"
                    />

                    {submitted && !values.message ? (
                      <span>Please enter a message</span>
                    ) : null}
                  </div>
                  <div className="submit">
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="contact-copyright">
        <p>&copy; Gung-Ho Films</p>
        <p>By Zach Hamman</p>
      </div>
    </>
  );
};

export default Contact;

{
  /* 
           
            

            
            

            <button className="form-field" type="submit" }>
              {" "}
              Submit
            </button> */
}
