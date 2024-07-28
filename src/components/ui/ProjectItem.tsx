import { ProjectDescription } from '@/components/ui/ProjectDescription';
import { ProjectImage } from '@/components/ui/ProjectImage';
import { ProjectTitle } from '@/components/ui/ProjectTitle';
import { ViewProjectLink } from '@/components/ui/ViewProjectLink';
import { SkillBubble } from './SkillBubble';

type ProjectItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
  projectLink: string;
};

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imageUrl,
  skills,
  projectLink,
}) => {
  return (
    <div className="mt-2 flex w-full flex-col justify-center md:mt-14 lg:flex-row">
      <div className="flex w-full flex-1 justify-center">
        <ProjectImage imageUrl={imageUrl} />
      </div>
      <div className="flex-1 lg:ml-8">
        <ProjectTitle title={title} />
        <ProjectDescription description={description} />
        <ViewProjectLink projectLink={projectLink} />
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillBubble key={index}>{skill}</SkillBubble>
          ))}
        </div>
      </div>
    </div>
  );
};
