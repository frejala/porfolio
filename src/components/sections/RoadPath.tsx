import { Section } from '@/components/ui/Section';
import { TextOutline } from '@/components/ui/TextOutline';
import ExperienceItem from '@/components/ui/ExperienceItem';
import { experiences } from '@/data/experiences';

const RoadPath = () => {
  return (
    <Section id="roadpath">
      <TextOutline breakAfterWord={2}>
        Roath-Path
      </TextOutline>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </Section>
  );
};

export default RoadPath;
