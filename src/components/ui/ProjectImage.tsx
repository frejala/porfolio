type ProjectImageProps = {
  imageUrl: string;
};

export const ProjectImage: React.FC<ProjectImageProps> = ({
  imageUrl,
}) => {
  return (
    <div className="mb-4 w-5/6">
      <img
        src={imageUrl}
        alt="Project"
        className="h-auto w-full"
      />
    </div>
  );
};
