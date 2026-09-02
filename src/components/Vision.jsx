import { motion } from "framer-motion";

function Vision() {
  return (
    <section
      id="vision"
      className="vision-section"
    >
      <motion.div
        className="vision-label"
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span>05</span>

        <p>
          AUTOKRYX TECHNOLOGIES
        </p>
      </motion.div>


      <motion.div
        className="vision-content"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2>
          Intelligence
          <br />
          <span>for what’s next.</span>
        </h2>

        <p>
          We believe technology should make complex
          things simple, meaningful and accessible.
          Our vision is to build intelligent digital
          experiences that create lasting impact at
          scale.
        </p>

        <a
          href="#contact"
          className="vision-link"
        >
          Our Vision
          <span>↗</span>
        </a>
      </motion.div>
    </section>
  );
}

export default Vision;