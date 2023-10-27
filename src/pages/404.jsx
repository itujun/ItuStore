import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex gap-3 justify-center min-h-screen items-center">
      <div id="error-page" className="text-center">
        <h1 className="text-3xl font-bold mb-4">Oops!</h1>
        <p className="font-medium mb-2">Sorry, unexpected error has occurred.</p>
        <p className="text-slate-500 font-bold">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};
