interface TextProps {
  content: string;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ content, className }) => {
  return <div className={className}>{content}</div>;
};
