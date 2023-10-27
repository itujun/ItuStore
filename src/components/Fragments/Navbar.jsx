// import { Button } from '../Elements/Button';

export const Navbar = () => {
  const handleLogout = () => {
    window.location.href = '/';
  };
  return (
    <div className="w-full box-border bg-sky-500 h-12 flex text-white justify-between md:px-20 sm:px-10 px-6 items-center">
      <div className="font-bold text-2xl">ItuStore</div>

      {/* <div className="font-medium">
        <Button variant="bg-transparant" hover="bg-transparant" onClick={handleLogout}>
          Logout
        </Button>
      </div> */}

      <div className="group inline-block">
        <button className="outline-none focus:outline-none px-3 py-1 bg-transparant text-white flex items-center min-w-32 rounded-xl">
          <span className="pr-1 font-semibold flex-1">Profile</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className="bg-white text-black border mt-1 transform rounded-sm scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Cart</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
