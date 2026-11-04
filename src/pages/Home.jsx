
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Code2,
  Camera,
  Sparkles,
} from "lucide-react";

import profilePhoto from "../assets/profile.jpeg";
import "./Home.css";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="home-profile-image">
            <img src={profilePhoto} alt="Portrait of K. Naveen Nayak" />
          </div>

          <p className="hero-eyebrow">
            <Sparkles size={14} />
            DEVELOPER · AI ENTHUSIAST · PHOTOGRAPHER
          </p>

          <h1>
            Think. Build.
            <br />
            <span>Make it matter.</span>
          </h1>

          <p className="hero-description">
            Hey, I'm Naveen. I explore technology, build digital
            experiences and turn curious ideas into meaningful projects.
          </p>

          <div className="hero-actions">
            <Link to="/development" className="primary-button">
              Explore my work <ArrowUpRight size={18} />
            </Link>

            <a
              href="/resume.pdf"
              download="K-Naveen-Nayak-Resume.pdf"
              className="resume-button"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <a href="#home-intro" className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={17} />
        </a>
      </section>

      {/* INTRODUCTION */}
      <section className="dark-section" id="home-intro">
        <motion.div
          className="dark-content"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="section-eyebrow">01 — THE PERSON BEHIND THE CODE</p>

          <h2>
            Curious by nature.
            <br />
            <span>Driven by innovation.</span>
          </h2>

          <p className="dark-description">
            I'm a B.Tech student specializing in Artificial Intelligence
            and Data Science at REVA University. I enjoy exploring
            emerging technologies, solving problems and continuously
            learning how to build better things.
          </p>

          <Link to="/about" className="blue-link">
            Get to know me <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* DEVELOPMENT */}
      <section className="development-section">
        <motion.div
          className="development-content"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="development-copy">
            <p className="section-eyebrow">02 — DEVELOPMENT</p>

            <h2>
              From ideas
              <br />
              <span>to reality.</span>
            </h2>

            <p className="development-description">
              I enjoy creating software, experimenting with AI
              and exploring technologies that solve real-world problems.
              Every project is an opportunity to learn something new.
            </p>

            <Link to="/development" className="blue-link">
              Discover my projects <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="code-visual">
            <div className="code-window">
              <div className="code-window-top">
                <div className="code-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="code-window-label">
                  <Code2 size={15} />
                  <span>developer.py</span>
                </div>
              </div>

              <pre>{`class Developer:
    name = "Naveen"

    interests = [
        "Artificial Intelligence",
        "Software Development",
        "Cloud Computing"
    ]

    def build(self):
        return "Ideas into reality"

developer = Developer()`}</pre>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PHOTOGRAPHY */}
      <section className="home-photography">
        <motion.div
          className="photography-content"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="section-eyebrow">03 — PHOTOGRAPHY</p>

          <h2>
            Look closer.
            <br />
            <span>See differently.</span>
          </h2>

          <p className="dark-description">
            Beyond technology, I enjoy photography.
            It helps me notice the little details, capture moments
            and tell stories through a different perspective.
          </p>

          <Link to="/photography" className="blue-link">
            Explore my frames <ArrowUpRight size={18} />
          </Link>

          <div className="home-photo-symbol">
            <Camera size={54} strokeWidth={1} />
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="final-section">
        <motion.div
          className="final-content"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="section-eyebrow">04 — WHAT'S NEXT?</p>

          <h2>
            Great things
            <br />
            start with an idea.
          </h2>

          <p className="final-description">
            Have a project, an opportunity or an interesting idea?
            Let's connect and make something meaningful.
          </p>

          <Link to="/contact" className="primary-button">
            Let's connect <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
