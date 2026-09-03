import { motion } from "framer-motion";

function Corporate() {
  return (
    <section
      id="corporate"
      className="corporate-section"
    >
      <div className="corporate-glow"></div>

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
        <motion.p
          className="corporate-label"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          AUTOKRYX TECHNOLOGIES
        </motion.p>

        <h2>
          Building the
          <br />
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            digital future.
          </motion.span>
        </h2>
      </motion.div>

      <div className="corporate-content">
        {/* Section Number */}
        <motion.div
          className="corporate-number-wrapper"
          initial={{
            opacity: 0,
            x: -40,
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
          <span className="corporate-number">
            04
          </span>

          <motion.div
            className="corporate-number-line"
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          />
        </motion.div>

        {/* Corporate Content */}
        <motion.div
          className="corporate-text"
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
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="corporate-small-label">
            OUR PURPOSE
          </p>

          <h3>
            Technology with
            <br />
            <span>purpose.</span>
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
            simple, powerful and built for what&apos;s
            next.
          </p>

          <motion.a
            href="#vision"
            className="corporate-link"
            whileHover={{
              x: 6,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            Discover Autokryx

            <motion.span
              whileHover={{
                rotate: 45,
              }}
            >
              ↗
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        className="corporate-bottom-line"
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
      />
    </section>
  );
}

export default Corporate;