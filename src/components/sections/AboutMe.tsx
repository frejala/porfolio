import { TextOutline } from '@/components/ui/TextOutline';
import { Section } from '@/components/ui/Section';

const AboutMe = () => {
  return (
    <Section>
      <TextOutline
        className="break-words text-[5.5rem]"
        breakAfterWord={2}
      >
        About Me
      </TextOutline>
      <span className="font-space-mono text-center text-sm text-white">
        Lorem ipsum dolor sit amet consectetur. Hac
        tristique tortor duis ut aliquam curabitur. Congue
        sit integer dui posuere enim amet viverra egestas.
        Nam ac eget mauris viverra elementum consectetur.
        Volutpat consectetur mi volutpat et etiam sit nisi
        fermentum. Sit sed vestibulum elementum tellus
        mattis velit eget dui. Et id quam bibendum bibendum.
        Nec tincidunt orci sed duis cras ultricies lobortis
        nunc eu. Vulputate arcu nibh. Lorem ipsum dolor sit
        amet consectetur. Hac tristique tortor duis ut
        aliquam curabitur.
      </span>
    </Section>
  );
};

export default AboutMe;
