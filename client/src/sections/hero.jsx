import { Button } from "../components/button";
import { Container } from "../components/container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/movies/person-in-darkness.webp"
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            Any Language Movies. <br />
            Only on Zestflix.
          </h1>
          <Button className="mb-16" size="large">
            Book Now
          </Button>
          <p className="font-semibold text-3xl">Cut the Queue.<br/>
            Reserve before you arrive the theatre.</p>
            
        </motion.div>
        <p className="p-2 text-center">Scroll down to sign up</p>
      </Container>
    
    </div>
  );
};
