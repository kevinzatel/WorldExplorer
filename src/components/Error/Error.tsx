import React, { FC } from "react";

interface IProps {
  text: string;
}

const Error: FC<IProps> = ({ text }: IProps) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Error;
