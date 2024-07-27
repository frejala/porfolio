type Route = {
  href: string;
  label: string;
};

const routes: Array<Route> = [
  {
    href: '/about',
    label: 'About',
  },
  {
    href: 'roadpath',
    label: 'My Road-Path',
  },
  {
    href: '/projects',
    label: 'My Projects',
  },
  {
    href: '/contact',
    label: "Let's Get in Touch",
  },
];

export { routes };
export type { Route };
