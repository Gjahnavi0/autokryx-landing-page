import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function Vision() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* =========================================
     1B SCROLL ANIMATION
  ========================================= */

  const numberScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55, 1],
    [0.65, 1, 1.15, 0.9]
  );

  const numberOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.8, 1],
    [0.15, 0.7, 1, 1, 0.2]
  );

  const numberY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, -100]
  );

  /* =========================================
     ORBIT ANIMATION
  ========================================= */

  const orbitRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-25, 25]
  );

  const orbitScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.15, 0.9]
  );

  return (
    <section
      id="vision"
      className="vision-section"
      ref={sectionRef}
    >

      {/* =================================
          BACKGROUND GLOW
      ================================= */}

      <motion.div
        className="vision-glow"
        style={{
          scale: orbitScale,
          rotate: orbitRotate,
        }}
      />


      {/* =================================
          LABEL
      ================================= */}

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


      {/* =================================
          CONTENT
      ================================= */}

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
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
      >

        <motion.p
          className="vision-small-label"

          initial={{
            opacity: 0,
            y: 15,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          OUR VISION
        </motion.p>


        <h2>
          Intelligence
          <br />

          <span>
            for what’s next.
          </span>
        </h2>


        <p>
          We believe technology should make
          complex things simple, meaningful and
          accessible. Our vision is to build
          intelligent digital experiences that
          create lasting impact at scale.
        </p>


        <motion.a
          href="#contact"
          className="vision-link"

          whileHover={{
            x: 6,
          }}

          transition={{
            duration: 0.25,
          }}
        >
          Our Vision

          <motion.span
            whileHover={{
              rotate: 45,
            }}
          >
            ↗
          </motion.span>
        </motion.a>

      </motion.div>


      {/* =================================
          ONE BILLION EXPERIENCE
      ================================= */}

      <motion.div
        className="billion-experience"

        style={{
          scale: numberScale,
          opacity: numberOpacity,
          y: numberY,
        }}
      >

        {/* OUTER ORBIT */}

        <motion.div
          className="billion-orbit billion-orbit-one"

          animate={{
            rotate: 360,
          }}

          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* INNER ORBIT */}

        <motion.div
          className="billion-orbit billion-orbit-two"

          animate={{
            rotate: -360,
          }}

          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        {/* LABEL */}

        <p className="billion-label">
          BUILT FOR
        </p>


        {/* NUMBER */}

        <motion.div
          className="billion-number"

          animate={{
            textShadow: [
              "0 0 20px rgba(212,175,55,0.10)",
              "0 0 50px rgba(212,175,55,0.25)",
              "0 0 20px rgba(212,175,55,0.10)",
            ],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          1B
        </motion.div>


        {/* CAPTION */}

        <p className="billion-caption">
          ONE BILLION PEOPLE
        </p>

      </motion.div>


      {/* =================================
          BOTTOM ACCENT
      ================================= */}

      <motion.div
        className="vision-bottom-line"

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
          delay: 0.3,
        }}
      />

    </section>
  );
}

export default Vision;