export type Experience = {
  period: string;
  title: string;
  company: string;
  companyLink: string;
  position: string;
  description: string;
  skills: string[];
};

export const experiences: Array<Experience> = [
  {
    period: '2022 - Present',
    title: 'Full Stack Developer',
    company: 'CDS S.A',
    companyLink: 'https://cds.com.py/',
    position: 'Junior Developer',
    description:
      'Developed high-quality, robust production code for a wide variety of projects for clients, including the MITIC (Ministry of Information and Communication Technologies), MIC (Ministry of Industry and Commerce), and MEF (Ministry of Economy and Finance), among others. Also built e-commerce applications for companies like Plub. Developed an ETL for the management of public contracts for the government of Panama, and more. Through my collaboration, many projects were successfully completed on time, allowing me to gain knowledge and experience.',
    skills: [
      'React',
      'React Native',
      'Angular',
      'FastApi',
      'Django',
      'SpringBoot',
    ],
  },
];
