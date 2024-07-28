type ProjectDescriptionProps = {
  description: string;
};

export const ProjectDescription: React.FC<
  ProjectDescriptionProps
> = ({ description }) => {
  return (
    <p className="mb-4 mt-4 font-space-mono leading-loose text-white">
      {description}
    </p>
  );
};
