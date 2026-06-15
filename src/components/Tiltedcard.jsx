import { motion } from "framer-motion";

function TiltedCard({ imageSrc }) {
  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] overflow-hidden"
        whileHover={{
          scale: 1.05,
          rotateX: 10,
          rotateY: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <img
          src={imageSrc}
          alt="Vishnu"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default TiltedCard;