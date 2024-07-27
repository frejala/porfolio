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
      <span className="max-w-lg text-center font-space-mono text-sm leading-10 tracking-wider text-white">
        Hi, I'm Fabrizio Rejala, a passionate developer
        based in Paraguay. I love creating websites with an
        excellent user experience. Currently, I am studying
        Computer Engineering. During my time at university,
        I have worked on various projects involving
        automation, project management, algorithm
        optimization, and databases. I have extensive
        experience in frontend development with frameworks
        such as React and Angular. Additionally, I have
        backend development experience with technologies
        like FastAPI, Django, and Spring Boot. Throughout my
        career, I have been recognized for my ability to
        solve complex problems with high-quality software
        solutions. While I have experience in backend
        application development, my main strength lies in
        frontend development. My goal is to become a highly
        experienced developer and elevate the user
        experience to the next level.
      </span>
    </Section>
  );
};

export default AboutMe;
