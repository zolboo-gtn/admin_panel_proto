interface ICustomInput {
  label?: string;
  placeholder?: string;
  tag?: string;
  type?: "password" | "text";
}
export const CustomInput: React.FC<
  ICustomInput & React.HTMLAttributes<HTMLDivElement>
> = ({ className, label, placeholder, tag, type }) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={tag}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={type ?? "text"}
          name={tag}
          id={tag}
          className="focus:ring-red-500 focus:border-red-500 block w-full h-10 sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
