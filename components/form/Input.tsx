import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<Props> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label>{label}</label>}
      <input className={`bg-gray-200 p-2 rounded-md ${className}`} {...props} />
    </div>
  );
};

export default Input;
