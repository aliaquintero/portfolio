import "./Contact.css";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert("submitted");
  };

  return (
    <form
      action="POST"
      name="contact"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Get In Touch</h3>
      <input type="hidden" name="contact" value="contact" />
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" {...register("name", { required: true })} />
      {errors.name && <span>Your name is required</span>}

      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      {errors.email && errors.email.type === "pattern" && (
        <span>Email is not valid</span>
      )}

      {errors.email && errors.email.type === "required" && (
        <span>An email is required</span>
      )}

      <label htmlFor="message">Your Message</label>
      <textarea
        name="message"
        id="message"
        cols="28"
        rows="8"
        {...register("message", { required: true })}
      ></textarea>
      {errors.message && <span>A message is required</span>}

      <button type="submit">Send</button>
    </form>
  );
}
