import { FC, SelectHTMLAttributes } from "react";

type OptionsType = {
  label: string;
  value: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionsType[];
  label?: string;
}

const Select: FC<SelectProps> = ({ options, label, className, ...props }) => {
  return (
    <div className="flex flex-1 flex-col">
      {label && <label>{label}</label>}
      <select className={`bg-gray-200 p-2 rounded-md ${className}`} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
