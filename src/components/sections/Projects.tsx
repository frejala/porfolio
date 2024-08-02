import { ProjectItem } from '@/components/ui/ProjectItem';
import { TextOutline } from '@/components/ui/TextOutline';

const projects = [
  {
    title: 'Project Name',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: 'https://via.placeholder.com/600x400',
    skills: [
      'React',
      'React Native',
      'Angular',
      'FastApi',
      'Django',
      'SpringBoot',
    ],
    projectLink: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex w-full flex-row flex-wrap gap-10 px-10 lg:gap-0 lg:px-0"
    >
      <div className="w-full self-start">
        <TextOutline>Projects</TextOutline>
      </div>
      <ProjectItem {...projects[0]} />
    </section>
  );
};

export default Projects;
