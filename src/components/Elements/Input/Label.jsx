export const Label = (props) => {
  const { name, children } = props;
  return (
    <label htmlFor={name} className="text-slate-700 block text-sm">
      {children}
    </label>
  );
};
