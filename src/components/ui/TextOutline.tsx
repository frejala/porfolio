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
  breakAfterWord,
  showDot = true,
}) => {
  const breakWord = breakAfterWord !== undefined;
  const words = children.split(' ');
  let firstLine = children;
  let secondLine = '';
  if (breakWord) {
    firstLine = words.slice(0, breakAfterWord).join(' ');
    secondLine = words.slice(breakAfterWord).join(' ');
  }

  return (
    <div
      className={cn(
        'font-poppins text-6xl font-bold leading-tight text-transparent text-stroke-white-1 md:text-[5.5rem]',
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
