import {
  AnimatePresence,
  MotionConfig,
  motion,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { Route, routes } from '@/routes';
import { MenuItem } from '@/components/ui/MenuItem';
import { useClickAway } from 'react-use';

export const Menu = () => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
  });

  const toggleVisibility = () => {
    if (buttonRef.current) {
      const rect =
        buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom,
        left: rect.left,
      });
    }
    setVisible((pv) => !pv);
  };

  useClickAway(buttonRef, () => {
    setVisible(false);
  });

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        animate={visible ? 'open' : 'closed'}
        onClick={toggleVisibility}
        className="relative h-20 w-20"
        ref={buttonRef}
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
          className="absolute left-1/2 top-[35%] h-[3px] w-10 bg-o-blue"
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
          className="absolute bottom-[35%] left-1/2 h-[3px] w-10 bg-o-yellow"
          style={{
            x: '-50%',
            y: '50%',
          }}
        />
      </motion.button>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              top: menuPosition.top - 12,
              left: menuPosition.left - 262,
            }}
            className="absolute w-80 bg-o-black text-white"
          >
            <ul className="flex flex-col">
              {routes.map((route: Route) => (
                <MenuItem key={route.href} {...route} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Menu;
