import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer">

      <motion.div
        className="footer-top"
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
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* FOOTER BRAND */}
        <motion.div
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
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          <p className="footer-label">
            AUTOKRYX TECHNOLOGIES
          </p>

          <h2>
            Building
            <br />
            <span>what’s next.</span>
          </h2>
        </motion.div>


        {/* FOOTER LINKS */}
        <motion.div
          className="footer-links"
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >

          <motion.a
            href="#home"
            whileHover={{ x: 6 }}
          >
            Home
          </motion.a>

          <motion.a
            href="#products"
            whileHover={{ x: 6 }}
          >
            Products
          </motion.a>

          <motion.a
            href="#corporate"
            whileHover={{ x: 6 }}
          >
            Corporate
          </motion.a>

          <motion.a
            href="#vision"
            whileHover={{ x: 6 }}
          >
            Vision
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ x: 6 }}
          >
            Contact
          </motion.a>

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@autokryx.in"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 6 }}
          >
            contact@autokryx.in
          </motion.a>

        </motion.div>

      </motion.div>


      {/* FOOTER BOTTOM */}
      <motion.div
        className="footer-bottom"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <span>
          © 2026 Autokryx Technologies
        </span>

        <span>
          Technology · Identity · Intelligence
        </span>
      </motion.div>

    </footer>
  );
}

export default Footer;