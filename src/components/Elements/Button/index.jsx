export const Button = (props) => {
  const { type = 'button', addClass, variant = 'bg-blue-600', hover = 'bg-blue-500' } = props;
  return (
    <button type={type} className={`p-2 mt-4 text-white rounded-md ${variant} hover:${hover} ${addClass}`}>
      Login
    </button>
  );
};
