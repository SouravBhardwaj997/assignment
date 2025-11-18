export const TextAreaGroup = ({
  inputClassName,
  labelClassName,
  label,
  name,
  className,
  placeholder,
}: {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  label: string;
  name: string;
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={name} className={`text-sm font-medium ${labelClassName}`}>
        {label}
      </label>
      <textarea
        name={name}
        className={`border p-2 border-gray-200 h-24 text-sm ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
};
