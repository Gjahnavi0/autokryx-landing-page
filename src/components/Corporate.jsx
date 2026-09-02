import { motion } from "framer-motion";

function Corporate() {
  return (
    <section
      id="corporate"
      className="corporate-section"
    >
      <motion.div
        className="corporate-header"
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="corporate-label">
          AUTOKRYX TECHNOLOGIES
        </p>

        <h2>
          Building the
          <br />
          <span>digital future.</span>
        </h2>
      </motion.div>

      <div className="corporate-content">
        <motion.div
          className="corporate-number"
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
            duration: 0.7,
            delay: 0.1,
          }}
        >
          04
        </motion.div>

        <motion.div
          className="corporate-text"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <h3>
            Technology with purpose.
          </h3>

          <p>
            Autokryx Technologies builds intelligent
            digital platforms, infrastructure and
            experiences designed to solve real-world
            problems at scale.
          </p>

          <p>
            We combine technology, identity and
            intelligence to create products that are
            simple, powerful and built for what’s next.
          </p>

          <a
            href="#vision"
            className="corporate-link"
          >
            Discover Autokryx
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Corporate;