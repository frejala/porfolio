import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode[];
};

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'flex w-full flex-col gap-10 px-10 lg:flex-row lg:gap-0 lg:px-0',
        className
      )}
    >
      <div className="flex-1">{children[0]}</div>
      <div className="flex-1">{children[1]}</div>
    </section>
  );
};
