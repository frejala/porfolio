import { Experience } from '@/data/experiences';
import { SkillBubble } from '@/components/ui/SkillBubble';
import { ArrowDiagonal } from '@/assets/icons/ArrowDiagonal';

export const ExperienceItem: React.FC<Experience> = ({
  period,
  title,
  company,
  companyLink,
  position,
  description,
  skills,
}) => {
  return (
    <div className="mb-8 flex flex-col justify-between lg:flex-row">
      <div className="mb-2 font-space-mono text-o-blue lg:mb-0">
        {period}
      </div>
      <div className="text-o-white ml-0 flex-1 font-poppins lg:ml-8">
        <h3 className="text-xl font-normal">
          {title} ·{' '}
          <a
            href={companyLink}
            className="text-o-white ml-1 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company} <ArrowDiagonal className="ml-3" />
          </a>
        </h3>
        <h4 className="mb-2 mt-2 font-space-mono text-lg text-o-blue">
          {position}
        </h4>
        <p className="text-o-gray mb-4 font-space-mono leading-loose">
          {description}
        </p>
        <div className="skills flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillBubble key={index}>{skill}</SkillBubble>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
