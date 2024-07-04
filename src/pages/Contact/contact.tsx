import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./ContactPage.css";

const Contactpage: React.FC = () => {
  const [mailtoLink, setMailtoLink] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const newMailtoLink = `mailto:abhiramkr82@gmail.com?subject=New Message from Contact Form&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    setMailtoLink(newMailtoLink);
    
    // Redirect to www.gmail.com
    window.location.href = "https://www.gmail.com";
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have a question or suggestion? Send us a message!</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {mailtoLink && (
          <div>
            <p>Click the link below to open your email client and send the message:</p>
            <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
              Send Email
            </a>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contactpage;