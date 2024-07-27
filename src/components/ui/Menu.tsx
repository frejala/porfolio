import { MotionConfig, motion } from 'framer-motion';
import { useState } from 'react';

export const Menu = () => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20"
      >
        <motion.span
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '35%'],
            },
          }}
          className="bg-o-blue absolute left-1/2 top-[35%] h-[3px] w-10"
          style={{
            y: '-50%',
            x: '-50%',
          }}
        />
        <motion.span
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
              bottom: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
              bottom: ['50%', '50%', '35%'],
            },
          }}
          className="bg-o-yellow absolute bottom-[35%] left-1/2 h-[3px] w-10"
          style={{
            x: '-50%',
            y: '50%',
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default Menu;
