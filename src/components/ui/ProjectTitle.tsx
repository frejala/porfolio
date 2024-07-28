type ProjectTitleProps = {
  title: string;
};

export const ProjectTitle: React.FC<ProjectTitleProps> = ({
  title,
}) => {
  return (
    <h3 className="font-se mi flex items-center font-poppins text-2xl text-o-white">
      {title}
    </h3>
  );
};
