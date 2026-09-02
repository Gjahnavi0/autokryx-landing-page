import { motion } from "framer-motion";

const products = [
  {
    number: "01",
    name: "Inside App",
    category: "INFRASTRUCTURE",
    description:
      "A technology platform designed to simplify workflows and connect people with powerful digital infrastructure.",
    link: "#inside-app",
  },
  {
    number: "02",
    name: "Kryx AI",
    category: "INTELLIGENCE",
    description:
      "AI-powered placement intelligence that helps students prepare smarter for technical and career opportunities.",
    link: "#kryx-ai",
  },
  {
    number: "03",
    name: "Redakx AI",
    category: "IDENTITY",
    description:
      "An intelligent AI experience built to help users work, learn and interact with information more effectively.",
    link: "#redakx-ai",
  },
];

function Products() {
  return (
    <section id="products" className="products-section">

      {/* HEADER */}

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
            <span>for what's next.</span>
          </h2>
        </div>

        <p className="products-intro">
          A connected ecosystem of technology,
          intelligence and digital experiences
          designed for scale.
        </p>

      </motion.div>


      {/* PRODUCT CARDS */}

      <div className="products-grid">

        {products.map((product, index) => (

          <motion.article
            className="product-card"
            key={product.number}

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
              amount: 0.2,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}

            whileHover={{
              y: -8,
            }}
          >

            <div className="product-top">

              <span>
                {product.number}
              </span>

              <span className="product-category">
                {product.category}
              </span>

            </div>


            <div className="product-content">

              <h3>
                {product.name}
              </h3>

              <p>
                {product.description}
              </p>

              <a href={product.link}>
                Explore
                <span>↗</span>
              </a>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default Products;