import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Route } from '@/routes';

type MenuItemProps = Route & {
  className?: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  href,
  label,
  className,
}) => {
  return (
    <motion.li
      whileHover={{
        scale: 1.1,
        backgroundColor: '#1f1f1f',
      }}
      className={cn(
        'flex cursor-pointer items-center justify-center border border-white px-4 py-5 font-space-mono font-bold leading-10',
        className
      )}
    >
      <a href={href} className="text-center">
        {label}
      </a>
    </motion.li>
  );
};
