import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div
        className="footer-inner"
        initial={{
          opacity: 0,
          y: 30,
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
        }}
      >
        {/* Brand */}
        <div className="footer-brand">
          <motion.a
            href="#home"
            whileHover={{
              opacity: 0.7,
            }}
          >
            <h3>AUTOKRYX</h3>
          </motion.a>

          <p>
            Technology, infrastructure and
            intelligence built for what&apos;s next.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <motion.a
            href="#home"
            whileHover={{
              y: -3,
            }}
          >
            Home
          </motion.a>

          <motion.a
            href="#products"
            whileHover={{
              y: -3,
            }}
          >
            Products
          </motion.a>

          <motion.a
            href="#corporate"
            whileHover={{
              y: -3,
            }}
          >
            Corporate
          </motion.a>

          <motion.a
            href="#vision"
            whileHover={{
              y: -3,
            }}
          >
            Vision
          </motion.a>

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@autokryx.in"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -3,
            }}
          >
            Contact
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom */}
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
          delay: 0.2,
        }}
      >
        <p>
          © {currentYear} AUTOKRYX TECHNOLOGIES
        </p>

        <p>
          Built for what&apos;s next.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;