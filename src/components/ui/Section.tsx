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
      className={cn('flex w-full', className)}
    >
      <div className="flex-1">{children[0]}</div>
      <div className="flex-1">{children[1]}</div>
    </section>
  );
};
