import { useForm } from "react-hook-form";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/sharedComponents/Footer";
import { fetchCSRFToken, userRegister } from "../services/UserService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [backendErrors, setBackendErrors] = useState();

  const submitHandler = async (data) => {
    await fetchCSRFToken();
    const response = await userRegister(data).catch((error) =>
      setBackendErrors(error.response.data.errors)
    );

    if (response.statusText === "OK") {
      navigate("/admin/news");
      localStorage.setItem("isLoggedIn", true);
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="flex justify-center pt-48 h-full px-4">
        <div className="w-[25rem]">
          <h1 className="text-2xl text-blue-600 rounded-lg px-2 py-1 text-center  mb-4">
            რეგისტრაცია
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-6">
              <label className="text">სახელი</label>
              <input
                {...register("name", { required: "ეს ველი აუცილებელია" })}
                className={`w-full placeholder:text-neutral-500 bg-transparent border font-sans text-base  rounded-lg px-2 py-2 focus:outline-none focus:border-blue-500 transition-all ${
                  errors.name
                    ? "border-red-500"
                    : "dark:border-white border-primary"
                } `}
                placeholder="შეიყვანეთ სახელი"
              />
              <p className="text-red-500 mt-1 h-2">
                {errors.name ? errors?.name.message : ""}
                {backendErrors?.name ? backendErrors.name : ""}
              </p>
            </div>

            <div className="mb-6">
              <label className="">მეილი</label>
              <input
                {...register("email", { required: "ეს ველი აუცილებელია" })}
                className={`w-full placeholder:text-neutral-500 bg-transparent border font-sans text-base  rounded-lg px-2 py-2 focus:outline-none focus:border-blue-500 transition-all ${
                  errors.name
                    ? "border-red-500"
                    : "dark:border-white border-primary"
                }`}
                placeholder="შეიყვანეთ მეილი"
              />
              <p className="text-red-500 mt-1 h-2">
                {errors.email ? errors?.email.message : ""}
                {backendErrors?.email ? backendErrors.email : ""}
              </p>
            </div>

            <div className="mb-6">
              <label>პაროლი</label>
              <input
                {...register("password", { required: "ეს ველი აუცილებელია" })}
                className={`w-full placeholder:text-neutral-500 bg-transparent border font-sans text-base  rounded-lg px-2 py-2 focus:outline-none focus:border-blue-500 transition-all ${
                  errors.password
                    ? "border-red-500"
                    : "dark:border-white border-primary"
                }`}
                type="password"
                placeholder="შეიყვანეთ პაროლი"
              />
              <p className="text-red-500 mt-1 h-2">
                {errors.password ? errors?.password.message : ""}
                {backendErrors?.password ? backendErrors.password : ""}
              </p>
            </div>
            <button className="bg-blue-600  px-4 py-2 rounded-lg block mx-auto w-full text-white">
              რეგისტრაცია
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
