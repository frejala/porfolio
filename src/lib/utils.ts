import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge<'text-stroke'>({
  extend: {
    classGroups: {
      'text-stroke': [
        'text-stroke-white-1',
        'text-stroke-none',
      ],
    },
    conflictingClassGroups: {
      'text-stroke': ['text-stroke'],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
