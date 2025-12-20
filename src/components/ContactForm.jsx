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
          Send Message
        </button>
      </form>
    </div>
  );
}
