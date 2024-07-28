import { cn } from '@/lib/utils';

type TextOutlineProps = {
  children: string;
  className?: string;
  breakAfterWord?: number;
  showDot?: boolean;
};

export const TextOutline: React.FC<TextOutlineProps> = ({
  children,
  className,
  breakAfterWord = 1,
  showDot = true,
}) => {
  const words = children.split(' ');
  const firstLine = words
    .slice(0, breakAfterWord)
    .join(' ');
  const secondLine = words.slice(breakAfterWord).join(' ');

  return (
    <div
      className={cn(
        'font-poppins text-[5.5rem] font-bold leading-tight text-transparent text-stroke-white-1',
        className
      )}
    >
      <span className="block leading-none">
        {firstLine}
        {showDot && !secondLine && (
          <span className="text-o-blue">.</span>
        )}
      </span>
      {secondLine && (
        <span className="block leading-none">
          {secondLine}
          {showDot && (
            <span className="text-o-blue">.</span>
          )}
        </span>
      )}
    </div>
  );
};
