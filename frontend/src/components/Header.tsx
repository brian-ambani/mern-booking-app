import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

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
                className="flex items-center text-white px-3 font-bold rounded-sm
                hover:bg-blue-600 transition-all duration-300 ease-in-out"
                to="/my-bookings"
              >
                Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold rounded-sm
                hover:bg-blue-600 transition-all duration-300 ease-in-out"
                to="/my-hotels"
              >
                Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/signin"
              className="flex bg-white items-center rounded-sm text-blue-600 px-3 font-bold 
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
