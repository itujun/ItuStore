function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs  rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-2 mb-5">ItuStore</h1>
        <p className="text-center font-medium text-slate-500">Welcome, please enter your detail</p>
        <form action="" className="my-4">
          <label htmlFor="username" className="text-slate-700 block text-sm">
            Username
          </label>
          <input type="text" name="username" id="username" className="block w-full p-2 mt-2 border rounded-md text-sm placeholder:opacity-70 focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your username" />
          <label htmlFor="password" className="text-slate-700 block text-sm">
            Password
          </label>
          <input type="text" name="password" id="password" className="block w-full p-2 mt-2 border rounded-md text-sm placeholder:opacity-70 focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your password" />
          <button type="submit" className="block w-full p-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-500">
            Login
          </button>
        </form>
        <p className="text-center font-medium">
          Don&lsquo;t have a account?{' '}
          <a href="" className="text-blue-600 font-bold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
