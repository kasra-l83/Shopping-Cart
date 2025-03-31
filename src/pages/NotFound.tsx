import { Link } from "react-router-dom"

export const NotFound: React.FC = () =>{
    return (
        <section className="flex items-center justify-center space-x-10 h-screen">
            <h3 className="text-8xl font-semibold mb-[20px]">404</h3>
            <div className="flex-col space-y-4">
                <h3 className="text-2xl font-bold ml-5">Sorry we couldn't find this page.</h3>
                <p className="text-base font-normal text-darkGray mr-1 border-l-2 pl-5">But dont worry, you can find plenty of other things on <span className="block">our homepage.</span></p>
                <Link to="/">
                <button className="text-sm py-2 px-4 bg-[blue] hover:bg-lightBlue text-[white] rounded-md font-medium ml-5 mt-5">
                    Back to products page
                </button>
                </Link>
            </div>
        </section>
    )
}