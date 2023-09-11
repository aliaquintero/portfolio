import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Clicked!");
  };
  return (
    <form
      action="POST"
      name="contact"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <h3>Get In Touch</h3>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Your Email</label>
      <input type="email" id="email" />
      <label htmlFor="message">Your Message</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
