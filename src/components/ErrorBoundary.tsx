import { NotFound } from "../pages/NotFound"
import { ErrorResponse, Link, UNSAFE_ErrorResponseImpl, useRouteError } from "react-router-dom"

export const ErrorBoundary: React.FC= () =>{
  const error= useRouteError();
  if ((error as UNSAFE_ErrorResponseImpl).status=== 404) return <NotFound/>;

  return (
    <div className="h-screen flex items-center justify-center space-x-10">
      <h3 className="text-8xl font-semibold mb-[20px]">{(error as ErrorResponse). status}</h3>
      <div className="flex-col space-y-4">
        <h3 className="text-2xl font-bold ml-5">{(error as Error).message}</h3>
        <Link to="/">
        <button className="text-sm py-2 px-4 bg-[blue] hover:bg-lightBlue text-[white] rounded-md font-medium ml-5 mt-5">
          Back to products page
        </button>
        </Link>
      </div>
    </div>
  )
}