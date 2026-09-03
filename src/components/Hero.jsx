import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";

function Crystal() {
  const crystalRef = useRef(null);
  const wireRef = useRef(null);
  const innerRef = useRef(null);
  const { pointer } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const mouseX = pointer.x;
    const mouseY = pointer.y;

    if (crystalRef.current) {
      const targetRotationY =
        time * 0.18 + mouseX * 0.35;

      const targetRotationX =
        Math.sin(time * 0.35) * 0.12 -
        mouseY * 0.18;

      crystalRef.current.rotation.y +=
        (targetRotationY -
          crystalRef.current.rotation.y) *
        0.04;

      crystalRef.current.rotation.x +=
        (targetRotationX -
          crystalRef.current.rotation.x) *
        0.04;
    }

    if (wireRef.current) {
      const targetY =
        -time * 0.12 + mouseX * 0.25;

      const targetX = mouseY * 0.12;

      wireRef.current.rotation.y +=
        (targetY -
          wireRef.current.rotation.y) *
        0.04;

      wireRef.current.rotation.x +=
        (targetX -
          wireRef.current.rotation.x) *
        0.04;

      wireRef.current.rotation.z =
        Math.sin(time * 0.25) * 0.12;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x =
        time * 0.45;

      innerRef.current.rotation.y =
        time * 0.65;

      const targetScale =
        1 + Math.abs(mouseX) * 0.08;

      innerRef.current.scale.x +=
        (targetScale -
          innerRef.current.scale.x) *
        0.05;

      innerRef.current.scale.y +=
        (targetScale -
          innerRef.current.scale.y) *
        0.05;

      innerRef.current.scale.z +=
        (targetScale -
          innerRef.current.scale.z) *
        0.05;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.55}
    >
      <mesh ref={crystalRef}>
        <icosahedronGeometry args={[1.8, 1]} />

        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.15}
          roughness={0.08}
          transmission={0.7}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.45}
        />
      </mesh>

      <mesh
        ref={wireRef}
        scale={1.03}
      >
        <icosahedronGeometry args={[1.8, 1]} />

        <meshBasicMaterial
          color="#D4AF37"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={innerRef}>
        <octahedronGeometry
          args={[0.65, 0]}
        />

        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.95}
          roughness={0.15}
          emissive="#5a4108"
          emissiveIntensity={0.65}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef(null);

  const particleCount = 250;
  const positions = [];

  for (
    let i = 0;
    i < particleCount;
    i++
  ) {
    const angle = i * 2.399963;

    const radius =
      3 + (i % 40) * 0.1;

    const x =
      Math.cos(angle) * radius;

    const y =
      Math.sin(i * 1.73) * 2.5;

    const z =
      Math.cos(i * 0.91) * 2;

    positions.push(x, y, z);
  }

  useFrame((state) => {
    const time =
      state.clock.getElapsedTime();

    if (particlesRef.current) {
      particlesRef.current.rotation.y =
        time * 0.025;

      particlesRef.current.rotation.x =
        Math.sin(time * 0.15) * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={
            new Float32Array(positions)
          }
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#D4AF37"
        size={0.035}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

function Hero() {
  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="hero"
    >
      {/* HERO TEXT */}

      <motion.div
        className="hero-text"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
      >
        <motion.p
          className="hero-label"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          AUTOKRYX TECHNOLOGIES
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          Technology built
          <br />
          for <span>one billion.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          Infrastructure · Identity ·
          Intelligence
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
        >
          <motion.button
            type="button"
            onClick={() =>
              scrollToSection("products")
            }
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Explore Products
            <span>↗</span>
          </motion.button>

          <motion.button
            type="button"
            className="secondary-button"
            onClick={() =>
              scrollToSection("corporate")
            }
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Corporate Profile
            <span>↗</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 3D HERO */}

      <motion.div
        className="hero-3d"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          delay: 0.2,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
      >
        <Canvas
          camera={{
            position: [0, 0, 7],
            fov: 45,
          }}
          dpr={[1, 2]}
        >
          <ambientLight
            intensity={1.1}
          />

          <directionalLight
            position={[4, 4, 5]}
            intensity={4}
            color="#D4AF37"
          />

          <directionalLight
            position={[-4, 1, 3]}
            intensity={2}
            color="#ffffff"
          />

          <pointLight
            position={[-4, -2, 4]}
            intensity={2.5}
            color="#D4AF37"
          />

          <Crystal />

          <Particles />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </motion.div>
    </section>
  );
}

export default Hero;