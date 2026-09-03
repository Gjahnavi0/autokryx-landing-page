import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Corporate from "./components/Corporate";
import Vision from "./components/Vision";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />

        <Products />

        <Corporate />

        <Vision />

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="contact-section"
        >
          <motion.div
            className="contact-inner"
            initial={{
              opacity: 0,
              y: 60,
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
            <motion.p
              className="section-label"
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
                duration: 0.6,
              }}
            >
              AUTOKRYX TECHNOLOGIES
            </motion.p>

            <motion.h2
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
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              Let’s build
              <br />
              <em>what’s next.</em>
            </motion.h2>

            <motion.p
              className="contact-text"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
            >
              Explore our products, technology and vision.
            </motion.p>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@autokryx.in"
              target="_blank"
              rel="noopener noreferrer"
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
                duration: 0.7,
                delay: 0.4,
              }}
              whileHover={{
                y: -3,
              }}
            >
              Contact Us
              <span>↗</span>
            </motion.a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;