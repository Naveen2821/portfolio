
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Send,
  MessageCircle,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailSubject = encodeURIComponent(form.subject);
    const mailBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:naveennayak2817@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <main className="contact-page">

      <section className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="contact-eyebrow">
            CONTACT / LET'S CONNECT
          </p>

          <h1>
            Have an idea?
            <br />
            <span>Let's talk.</span>
          </h1>

          <p className="contact-hero-description">
            Every great project starts with a conversation.
            Let's connect, exchange ideas and explore possibilities.
          </p>

          <a href="#contact-details" className="contact-scroll-link">
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <span className="contact-hero-bottom">
          OPEN TO IDEAS & OPPORTUNITIES
        </span>
      </section>

      <section className="contact-content" id="contact-details">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-eyebrow">LET'S CONNECT</p>

          <h2>
            Good things
            <br />
            start with a
            <br />
            conversation.
          </h2>

          <p className="contact-description">
            Whether you have a project idea, collaboration opportunity
            or simply want to say hello, my inbox is open.
          </p>

          <a
            href="mailto:naveennayak2817@gmail.com"
            className="contact-email"
          >
            <Mail size={20} />
            <span>naveennayak2817@gmail.com</span>
            <ArrowUpRight size={17} />
          </a>

          <div className="contact-social-heading">
            FIND ME ONLINE
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Naveen2821"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/k-naveen-nayak-443454385/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-form-heading">
            <MessageCircle size={24} />

            <div>
              <h3>Send a message.</h3>
              <p>I'd love to hear what you're thinking.</p>
            </div>
          </div>

          <div className="contact-input-group">
            <label htmlFor="name">YOUR NAME</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="subject">SUBJECT</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="message">YOUR MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a little about your idea..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send message <Send size={17} />
          </button>

          <p className="form-note">
            Your email application will open with your message prepared.
          </p>
        </motion.form>

      </section>

      <section className="contact-closing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-eyebrow">UNTIL THEN</p>

          <h2>
            Stay curious.
            <br />
            <span>Keep creating.</span>
          </h2>

          <a
            href="mailto:naveennayak2817@gmail.com"
            className="contact-closing-link"
          >
            Say hello <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>

    </main>
  );
}
