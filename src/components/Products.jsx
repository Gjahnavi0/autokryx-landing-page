import { motion } from "framer-motion";

const products = [
  {
    number: "01",
    name: "Inside App",
    category: "INFRASTRUCTURE",
    description:
      "A technology platform designed to simplify workflows and connect people with powerful digital infrastructure.",
    link: "#inside-app",
    symbol: "◎",
  },
  {
    number: "02",
    name: "Kryx AI",
    category: "INTELLIGENCE",
    description:
      "AI-powered placement intelligence that helps students prepare smarter for technical and career opportunities.",
    link: "#kryx-ai",
    symbol: "✦",
  },
  {
    number: "03",
    name: "Redakx AI",
    category: "IDENTITY",
    description:
      "An intelligent AI experience built to help users work, learn and interact with information more effectively.",
    link: "#redakx-ai",
    symbol: "◈",
  },
];

function Products() {
  return (
    <section
      id="products"
      className="products-section"
    >
      {/* Header */}
      <motion.div
        className="products-header"
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
        <div>
          <p className="section-label">
            AUTOKRYX TECHNOLOGIES
          </p>

          <h2>
            Products built
            <br />
            <span>for what&apos;s next.</span>
          </h2>
        </div>

        <motion.p
          className="products-intro"
          initial={{
            opacity: 0,
            x: 30,
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
          A connected ecosystem of technology,
          intelligence and digital experiences
          designed for scale.
        </motion.p>
      </motion.div>

      {/* Product Cards */}
      <div className="products-grid">
        {products.map((product, index) => (
          <motion.article
            className="product-card"
            key={product.number}
            initial={{
              opacity: 0,
              y: 70,
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
              duration: 0.75,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}
          >
            {/* Card Top */}
            <div className="product-top">
              <span className="product-number">
                {product.number}
              </span>

              <span className="product-category">
                {product.category}
              </span>
            </div>

            {/* Product Visual */}
            <motion.div
              className="product-visual"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="product-orbit"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="product-orbit product-orbit-inner"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.span
                className="product-symbol"
                whileHover={{
                  scale: 1.25,
                  rotate: 15,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {product.symbol}
              </motion.span>
            </motion.div>

            {/* Product Content */}
            <div className="product-content">
              <motion.h3
                whileHover={{
                  x: 6,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                {product.name}
              </motion.h3>

              <p>
                {product.description}
              </p>

              <motion.a
                href={product.link}
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                Explore

                <motion.span
                  whileHover={{
                    x: 4,
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  ↗
                </motion.span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Ecosystem Divider */}
      <motion.div
        className="ecosystem-line"
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          delay: 0.3,
        }}
      >
        <span></span>

        <p>
          ONE ECOSYSTEM · THREE EXPERIENCES
        </p>

        <span></span>
      </motion.div>
    </section>
  );
}

export default Products;