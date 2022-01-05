import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useMagic = (initial, final, threshold) => {
  const [once, setOnce] = useState(false);
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView && !once) {
      animation.start(final);
      setOnce(true);
    }
    if (!inView && !once) {
      animation.start(initial);
    }
  }, [inView, once, final, initial, animation]);

  return { ref, animation };
};
export default useMagic;
