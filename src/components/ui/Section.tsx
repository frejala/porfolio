import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode[];
};

export const Section = ({
  id,
  className,
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('mt-10 flex justify-around', className)}
    >
      <div className="grow basis-[0]">{children[0]}</div>
      <div className="grow basis-[0]">{children[1]}</div>
    </section>
  );
};
