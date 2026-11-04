
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  BrainCircuit,
  Camera,
  Cloud,
  Lightbulb,
} from "lucide-react";

import profilePhoto from "../assets/profile.jpeg";
import "./About.css";

const interests = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Exploring AI, machine learning and intelligent applications.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building applications and improving my programming skills.",
  },
  {
    icon: Cloud,
    title: "Cloud Technology",
    description:
      "Learning about cloud computing, infrastructure and deployment.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capturing everyday moments and exploring creative perspectives.",
  },
];

export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-eyebrow">GET TO KNOW ME</p>

          <h1>
            More than
            <br />
            <span>just code.</span>
          </h1>

          <p className="about-hero-description">
            A curious mind, a creative perspective and a passion
            for building things that make a difference.
          </p>

          <div className="about-profile">
            <img src={profilePhoto} alt="K. Naveen Nayak" />
          </div>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <motion.div
          className="about-intro-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-eyebrow">WHO I AM</p>

          <h2>
            Learning today.
            <br />
            <span>Building tomorrow.</span>
          </h2>

          <p>
            I'm K. Naveen Nayak, a B.Tech student specializing in
            Artificial Intelligence and Data Science at REVA University,
            Bengaluru.
          </p>

          <p>
            I'm passionate about technology, software development and
            artificial intelligence. I enjoy exploring new tools,
            experimenting with ideas and developing projects that
            help me grow as a developer.
          </p>
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section className="about-education">
        <motion.div
          className="about-education-inner"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="education-icon">
            <GraduationCap size={36} strokeWidth={1.4} />
          </div>

          <p className="about-eyebrow">MY EDUCATION</p>

          <h2>
            Building a strong
            <br />
            <span>foundation.</span>
          </h2>

          <div className="education-card">
            <p className="education-label">UNDERGRADUATE</p>

            <h3>Bachelor of Technology</h3>

            <h4>Artificial Intelligence & Data Science</h4>

            <p>REVA University · Bengaluru</p>

            <span>Second Year · Third Semester</span>
          </div>
        </motion.div>
      </section>

      {/* INTERESTS */}
      <section className="about-interests">
        <div className="about-interests-heading">
          <p className="about-eyebrow">WHAT DRIVES ME</p>

          <h2>
            Different interests.
            <br />
            <span>One curious mind.</span>
          </h2>
        </div>

        <div className="interest-grid">
          {interests.map((interest, index) => {
            const InterestIcon = interest.icon;

            return (
              <motion.article
                className="interest-card"
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <InterestIcon size={30} strokeWidth={1.5} />

                <h3>{interest.title}</h3>

                <p>{interest.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* PERSONAL PHILOSOPHY */}
      <section className="about-philosophy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Lightbulb size={35} strokeWidth={1.4} />

          <h2>
            Stay curious.
            <br />
            Keep creating.
            <br />
            <span>Never stop learning.</span>
          </h2>

          <p>
            Every project, challenge and new experience is
            another opportunity to improve.
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="about-contact">
        <p className="about-eyebrow">LET'S CONNECT</p>

        <h2>
          Have an idea?
          <br />
          Let's talk.
        </h2>

        <Link to="/contact" className="about-contact-button">
          Contact me <ArrowUpRight size={18} />
        </Link>
      </section>

    </main>
  );
}
