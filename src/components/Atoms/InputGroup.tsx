export const InputGroup = ({
  inputClassName,
  labelClassName,
  label,
  name,

  placeholder,
}: {
  inputClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  label: string;
  name: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className={`text-sm font-medium ${labelClassName}`}>
        {label}
      </label>
      <input
        name={name}
        type="text"
        className={`border p-2 border-gray-200 text-sm ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
};
