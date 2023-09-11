export default function Contact() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Clicked!");
  };
  return (
    <form action="SUBMIT">
      <h1>Get In Touch</h1>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Your Email</label>
      <input type="email" id="email" />
      <label htmlFor="message">Your Message</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <button
        type="submit"
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
    </form>
  );
}
