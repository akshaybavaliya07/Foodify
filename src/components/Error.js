import { useRouteError } from "react-router-dom";

const Error = () => {

  const error = useRouteError();

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for doesn’t exist or might have been moved.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  )
}
export default Error;