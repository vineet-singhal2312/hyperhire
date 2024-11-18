import { FC } from "react";

type CheckboxFieldProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const CheckboxField: FC<CheckboxFieldProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 accent-white rounded-sm ${className}`}
      />
      <label htmlFor={id} className="text-white font-bold">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
