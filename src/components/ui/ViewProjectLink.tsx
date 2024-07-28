import { ArrowDiagonal } from '@/assets/icons/ArrowDiagonal';

type ViewProjectLinkProps = {
  projectLink: string;
};

export const ViewProjectLink: React.FC<
  ViewProjectLinkProps
> = ({ projectLink }) => {
  return (
    <a
      href={projectLink}
      className="mt-4 flex items-center text-o-blue"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
      <ArrowDiagonal className="ml-1" />
    </a>
  );
};
