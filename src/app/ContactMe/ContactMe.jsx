"use client";
import { useState } from "react";
import { toast } from "react-toastify"; 
import emailjs from '@emailjs/browser';
import styles from "./ContactMe.module.css";
import Image from "next/image";
import Link from "next/link";

function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email:"",
    subject:"",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        subject: userInput.subject,
        message: userInput.message
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email:"",
          subject:"",
          message: ""
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className={styles.card}>
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Your Name:</label>
              <input
                type="text"
                name="name"
                value={userInput.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
                <label>Your Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userInput.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Subject:</label>
                <input
                    type="text"
                    name="subject"
                    value={userInput.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
              <label>Your Message:</label>
              <textarea
                name="message"
                value={userInput.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className={styles.contactSection}>
          <p>
            <Image src="/mail-1454731_640.webp" alt="Email" width={50} height={50}></Image><Link href= "mailto:athulmathewvarughese@gmail.com">athulmathewvarughese@gmail.com</Link>
          </p>
          <p>
            <Image src="/phone-512.webp" alt="Phone No" width={50} height={50}></Image><Link href="tel:+91 7306250160">+91 7306250160</Link>
          </p>
        
        </div>
    </section>
  );
}

export default ContactForm;
