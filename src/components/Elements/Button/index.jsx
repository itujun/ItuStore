export const Button = (props) => {
  const { type = 'button', addClass, variant = 'bg-sky-500', hover = 'hover:bg-sky-400', onClick, children } = props;
  return (
    <button type={type} className={`p-2 text-white rounded-md ${variant} ${hover} ${addClass}`} onClick={onClick}>
      {children}
    </button>
  );
};
