import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { isLogged } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Flin Holidays</Link>
        </span>
        <span className="flex space-x-2">
          {isLogged ? (
            <>
              <Link
                to="/my-bookings"
                className="flex bg-white items-center rounded-md text-blue-600 px-3 font-bold 
            transition duration-200 ease-in-out hover:bg-gray-300 "
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className="flex bg-white items-center rounded-md text-blue-600 px-3 font-bold"
              >
                My Hotels
              </Link>
              <button className="flex bg-white items-center rounded-md text-blue-600 px-3 font-bold">
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="./sign-in"
              className="flex bg-white items-center rounded-md text-blue-600 px-3 font-bold 
        transition duration-200 ease-in-out hover:bg-gray-300 "
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
