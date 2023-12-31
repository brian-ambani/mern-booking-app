import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => {
  const queryClient = useQueryClient();

  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      //show toast
      showToast({ message: "Signed out successfully", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      //show toast
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-md text-blue-600 px-3 font-bold 
            transition duration-200 ease-in-out hover:bg-gray-300 "
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
