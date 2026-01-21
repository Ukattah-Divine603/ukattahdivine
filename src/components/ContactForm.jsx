import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-form autoSlide">
      <form
        action="https://formspree.io/f/mzzjvdpb"
        method="POST"
        className="contact-form"
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </label>

        <label>
          WhatsApp Number
          <input
            type="tel"
            name="phone"
            placeholder="+234 801 234 5678"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </label>

        <button type="submit" className="submit-btn">
          Send Message{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
