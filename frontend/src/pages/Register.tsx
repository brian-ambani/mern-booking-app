import { useForm } from "react-hook-form";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register, watch, handleSubmit } = useForm<RegisterFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Create An Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("firstName", { required: "this field is required" })}
          />
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastName", { required: "this field is required" })}
          />
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "this field is required" })}
        />
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "this field is required",
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
        />
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirm Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "this field is required";
              } else if (watch("password") !== val) {
                return "passwords do not match";
              }
            },
          })}
        />
      </label>
      <span>
        <button
          type="submit"
          className="bg-blue-800 text-white p-2 font-bold rounded-md
        hover:bg-blue-600 transition duration-300"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
