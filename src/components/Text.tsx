import React from 'react';

type TextProps = {
  text: string;
};

const Text: React.FC<TextProps> = ({ text }) => (
  <div>{text}</div>
);

export default Text;
