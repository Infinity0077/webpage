import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
        <header className="flex items-center justify-between bg-gray-900 text-white p-5">
            <div className="logo">
            <Link to="/" exact="true">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">CMS Blog</h2>
            </Link>
            </div>

            <nav>
          <ul className="flex">
            <li className="mr-5 lg:text-lg">
              <button>
                <Link to="/" className="py-2 px-6 rounded shadow text-white bg-gray hover:bg-transparent border-2 border-red transition-all duration-500 hover:text-black font-bold">Home</Link>
              </button>
            </li>
            <li className="lg:text-lg">
              <button>
                <Link to="/blog" className="py-2 px-6 rounded shadow text-white bg-text-gray-700 hover:bg-transparent border-2 border-red transition-all duration-500 hover:text-black font-bold">Blog</Link>
              </button>
            </li>
          </ul>
        </nav>
            
        </header>
    </>
  )
}
