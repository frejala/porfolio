import { cn } from '@/lib/utils';

type InputProps = {
  id?: string;
  label?: string;
  className?: string;
  type?: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  label,
  className,
  type,
}) => {
  return (
    <div className="relative z-0 flex-1">
      <input
        type={type ?? 'text'}
        id={id}
        className={cn(
          'peer block w-full appearance-none border-0 border-b-2 border-o-white bg-transparent px-0 py-2.5 text-lg text-white focus:outline-none focus:ring-0',
          className
        )}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-o-gray duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
      </label>
    </div>
  );
};
