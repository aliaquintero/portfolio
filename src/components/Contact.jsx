import "./Contact.css";

export default function Contact() {
  return (
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <h3>Get In Touch</h3>
        <input type="hidden" name="contact-form" value="contact-form" />
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Your Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </form>
  );
}
