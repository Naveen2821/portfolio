
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              KN<span>.</span>
            </Link>

            <h2>
              Creating today.
              <br />
              Exploring tomorrow.
            </h2>

            <p>Developer · AI Enthusiast · Photographer</p>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>

            <nav className="footer-link-list">
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about">About</Link></div>
              <div><Link to="/development">Development</Link></div>
              <div><Link to="/photography">Photography</Link></div>
              <div><Link to="/contact">Contact</Link></div>
            </nav>
          </div>

          <div className="footer-column">
            <h4>CONNECT</h4>

            <div className="footer-link-list">
              <div>
                <a href="https://github.com/Naveen2821"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={14} />
                </a>
              </div>

              <div>
                <a href="https://www.linkedin.com/in/k-naveen-nayak-443454385/"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>

              <div>
                <a href="mailto:naveennayak2817@gmail.com">
                  Email <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} K. Naveen Nayak. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
