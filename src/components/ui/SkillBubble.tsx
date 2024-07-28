type SkillBubbleProps = {
  children?: React.ReactNode;
};

export const SkillBubble: React.FC<SkillBubbleProps> = ({
  children,
}) => {
  return (
    <span className="bg-custom-green rounded-full px-3 py-1 text-o-blue">
      {children}
    </span>
  );
};
