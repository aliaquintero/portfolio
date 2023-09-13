import "./Contact.css";

export default function Contact() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <h3>Get In Touch</h3>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="6"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
