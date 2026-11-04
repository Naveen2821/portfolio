
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Car,
  Mic,
  FileSearch,
  Video,
  MapPin,
} from "lucide-react";

import "./Development.css";

const projects = [
  {
    number: "01",
    name: "EscapeX",
    category: "GAME DEVELOPMENT",
    description:
      "A playable maze runner game focused on navigation, problem-solving and interactive gameplay.",
    technologies: ["Python", "FastAPI", "HTML", "CSS", "JavaScript"],
    icon: BrainCircuit,
    theme: "project-dark",
  },
  {
    number: "02",
    name: "SnackMap",
    category: "WEB DEVELOPMENT",
    description:
      "A street food exploration website designed to help users discover food experiences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: MapPin,
    theme: "project-light",
  },
  {
    number: "03",
    name: "Smart Parking",
    category: "IOT DEVELOPMENT",
    description:
      "An IoT-based parking concept using ultrasonic sensors and NodeMCU.",
    technologies: ["NodeMCU", "ESP8266", "Ultrasonic Sensors"],
    icon: Car,
    theme: "project-blue",
  },
  {
    number: "04",
    name: "VoiceForge",
    category: "AI & WEB DEVELOPMENT",
    description:
      "A language translation project with text-to-speech output and downloadable MP3 audio.",
    technologies: ["Python", "AI", "Text-to-Speech"],
    icon: Mic,
    theme: "project-dark",
  },
  {
    number: "05",
    name: "Resume Analyzer",
    category: "AI APPLICATION",
    description:
      "A web application concept focused on resume analysis and useful insights.",
    technologies: ["Python", "AI", "Web Development"],
    icon: FileSearch,
    theme: "project-light",
  },
  {
    number: "06",
    name: "AI Video SaaS",
    category: "GENERATIVE AI",
    description:
      "An AI-powered video creation concept combining scripts, voiceovers, subtitles and video assembly.",
    technologies: ["React", "FastAPI", "MongoDB", "FFmpeg"],
    icon: Video,
    theme: "project-blue",
  },
];

const skills = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "FastAPI",
  "SQL",
  "MongoDB",
  "Git",
  "GitHub",
];

export default function Development() {
  return (
    <main className="development-page">

      {/* HERO */}
      <section className="dev-hero">
        <motion.div
          className="dev-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="dev-eyebrow">
            DEVELOPMENT / SELECTED WORK
          </p>

          <h1>
            Turning ideas
            <br />
            into <span>reality.</span>
          </h1>

          <p className="dev-hero-description">
            I enjoy building applications, exploring emerging technologies
            and creating solutions through code.
          </p>

          <a href="#projects" className="dev-scroll-link">
            Explore my projects <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="dev-skills">
        <div className="dev-skills-inner">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="dev-eyebrow">MY TOOLKIT</p>

            <h2>
              Technology is
              <br />
              <span>my playground.</span>
            </h2>

            <p className="dev-skills-description">
              Programming languages, frameworks and tools I have
              explored through learning and projects.
            </p>
          </motion.div>

          <div className="dev-skill-list">
            {skills.map((skill, index) => (
              <motion.span
                className="dev-skill-tag"
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="dev-projects" id="projects">

        <div className="dev-projects-heading">
          <p className="dev-eyebrow">SELECTED PROJECTS</p>

          <h2>
            Things I've
            <br />
            <span>been building.</span>
          </h2>

          <p>
            A collection of projects, experiments and ideas
            developed through curiosity and continuous learning.
          </p>
        </div>

        <div className="dev-project-grid">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                className={`dev-project-card ${project.theme}`}
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 2) * 0.1,
                }}
              >
                <div className="dev-project-top">
                  <span>{project.number} / 06</span>
                  <ProjectIcon size={27} strokeWidth={1.5} />
                </div>

                <div className="dev-project-content">
                  <p className="dev-project-category">
                    {project.category}
                  </p>

                  <h3>{project.name}</h3>

                  <p className="dev-project-description">
                    {project.description}
                  </p>

                  <div className="dev-project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* GITHUB */}
      <section className="dev-github">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Code2 size={42} strokeWidth={1.4} />

          <p className="dev-eyebrow">MORE ON GITHUB</p>

          <h2>
            Code. Create.
            <br />
            <span>Keep learning.</span>
          </h2>

          <p>
            Explore my coding journey, repositories and experiments.
          </p>

          <a
            href="https://github.com/Naveen2821"
            target="_blank"
            rel="noopener noreferrer"
            className="dev-github-button"
          >
            Visit GitHub <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="dev-contact">
        <p className="dev-eyebrow">HAVE SOMETHING IN MIND?</p>

        <h2>
          Let's build
          <br />
          something meaningful.
        </h2>

        <Link to="/contact" className="dev-contact-button">
          Get in touch <ArrowUpRight size={18} />
        </Link>
      </section>

    </main>
  );
}
