
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
} from "lucide-react";

import "./Photography.css";

import photo1 from "../assets/photography/photo-1..jpeg";
import photo2 from "../assets/photography/photo-2..jpeg";
import photo3 from "../assets/photography/photo-3..jpeg";
import photo4 from "../assets/photography/photo-4..jpeg";
import photo5 from "../assets/photography/photo-5..jpeg";
import photo6 from "../assets/photography/photo-6..jpeg";
import photo7 from "../assets/photography/photo-7..jpeg";
import photo8 from "../assets/photography/photo-8..jpeg";
import photo9 from "../assets/photography/photo-9..jpeg";
import photo11 from "../assets/photography/photo-11..jpeg";
import photo12 from "../assets/photography/photo-12..jpeg";
import photo13 from "../assets/photography/photo-13..jpeg";

const photos = [
  { src: photo1, title: "Perspective 01", number: "01" },
  { src: photo2, title: "Perspective 02", number: "02" },
  { src: photo3, title: "Perspective 03", number: "03" },
  { src: photo4, title: "Perspective 04", number: "04" },
  { src: photo5, title: "Perspective 05", number: "05" },
  { src: photo6, title: "Perspective 06", number: "06" },
  { src: photo7, title: "Perspective 07", number: "07" },
  { src: photo8, title: "Perspective 08", number: "08" },
  { src: photo9, title: "Perspective 09", number: "09" },
  { src: photo11, title: "Perspective 10", number: "10" },
  { src: photo12, title: "Perspective 11", number: "11" },
  { src: photo13, title: "Perspective 12", number: "12" },
];

export default function Photography() {
  const [selected, setSelected] = useState(null);

  const closeViewer = useCallback(() => {
    setSelected(null);
  }, []);

  const previousPhoto = useCallback(() => {
    setSelected((current) =>
      current === null
        ? null
        : (current - 1 + photos.length) % photos.length
    );
  }, []);

  const nextPhoto = useCallback(() => {
    setSelected((current) =>
      current === null
        ? null
        : (current + 1) % photos.length
    );
  }, []);

  // KEYBOARD CONTROLS
  useEffect(() => {
    if (selected === null) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") previousPhoto();
      if (event.key === "ArrowRight") nextPhoto();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected, closeViewer, previousPhoto, nextPhoto]);

  return (
    <main className="photography-page">

      {/* HERO SECTION */}

      <section className="photo-hero">
        <motion.div
          className="photo-hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="photo-eyebrow">
            THE ART OF OBSERVATION
          </p>

          <h1>
            Through
            <br />
            <span>My Lens.</span>
          </h1>

          <p className="photo-intro">
            Moments, perspectives and little details
            that make the world interesting.
          </p>

          <a href="#photo-gallery" className="photo-explore-link">
            Explore the collection
            <ArrowDown size={17} />
          </a>
        </motion.div>

        <span className="photo-scroll">
          12 FRAMES · ONE PERSPECTIVE
        </span>
      </section>

      {/* GALLERY INTRODUCTION */}

      <section className="photo-gallery-section" id="photo-gallery">

        <motion.div
          className="photo-gallery-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="photo-eyebrow">
            SELECTED FRAMES / 2026
          </p>

          <h2>
            Every frame.
            <br />
            <span>A different story.</span>
          </h2>

          <p>
            A collection of moments and perspectives captured
            through my lens.
          </p>
        </motion.div>

        {/* PHOTO GRID */}

        <div className="photo-grid">
          {photos.map((photo, index) => (
            <motion.button
              type="button"
              className={`photo-item photo-item-${index + 1}`}
              key={photo.number}
              onClick={() => setSelected(index)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
              }}
              whileHover={{ y: -5 }}
              aria-label={`Open ${photo.title}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
              />

              <span className="photo-number">
                {photo.number}
              </span>

              <span className="photo-caption">
                {photo.title}
              </span>
            </motion.button>
          ))}
        </div>

      </section>

      {/* CLOSING SECTION */}

      <section className="photo-closing">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="photo-eyebrow">
            BEYOND WHAT THE EYE SEES
          </p>

          <h2>
            Beauty lives
            <br />
            <span>in the details.</span>
          </h2>

          <p>
            Sometimes, all it takes is a different perspective.
          </p>
        </motion.div>
      </section>

      {/* FULL SCREEN IMAGE VIEWER */}

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="photo-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeViewer}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeViewer}
              aria-label="Close image viewer"
            >
              <X size={25} />
            </button>

            <button
              type="button"
              className="lightbox-arrow lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                previousPhoto();
              }}
              aria-label="Previous photograph"
            >
              <ChevronLeft size={30} />
            </button>

            <motion.img
              key={selected}
              src={photos[selected].src}
              alt={photos[selected].title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            />

            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                nextPhoto();
              }}
              aria-label="Next photograph"
            >
              <ChevronRight size={30} />
            </button>

            <div className="lightbox-caption">
              <span>{photos[selected].title}</span>
              <span>
                {String(selected + 1).padStart(2, "0")} / {photos.length}
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
