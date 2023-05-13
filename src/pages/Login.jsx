import { useForm } from "react-hook-form";
import Footer from "../components/sharedComponents/Footer";
import Header from "../components/sharedComponents/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchCSRFToken, login } from "../services/UserService";
import axios from "axios";

const Login = () => {
  const [backendErrors, setBackendErrors] = useState();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitHandler = async (data) => {
    await fetchCSRFToken();
    const response = await login(data).catch((error) => {
      setBackendErrors(error.response.data.message);
    });

    if (response?.statusText === "OK") {
      navigate("/admin/news");
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center pt-48 h-full px-4">
        <Header />
        <div className="w-[25rem]">
          <h1 className="text-4xl text-blue-600 rounded-lg px-2 py-1 text-center  mb-4">
            შესვლა
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-6">
              <label className="text-lg">სახელი</label>
              <input
                {...register("name", { required: "ეს ველი აუცილებელია" })}
                className={`w-full placeholder:text-neutral-500 bg-transparent border font-sans text-base  rounded-lg px-2 py-2 focus:outline-none focus:border-blue-500 transition-all ${
                  errors.name ? "border-red-500" : "border-white"
                }`}
                placeholder="შეიყვანეთ სახელი"
              />
              <p className="text-red-500 mt-1 h-2">
                {errors.name ? errors?.name.message : ""}
                {backendErrors ? backendErrors : ""}
              </p>
            </div>
            <div className="mb-6">
              <label className="text-lg">პაროლი</label>
              <input
                {...register("password", { required: "ეს ველი აუცილებელია" })}
                className={`w-full placeholder:text-neutral-500 bg-transparent border font-sans text-base  rounded-lg px-2 py-2 focus:outline-none focus:border-blue-500 transition-all ${
                  errors.password ? "border-red-500" : "border-white"
                }`}
                type="password"
                placeholder="შეიყვანეთ პაროლი"
              />
              <p className="text-red-500 mt-1 h-2">
                {errors.password ? errors?.password.message : ""}
              </p>
            </div>
            <div className="flex gap-2 mb-6 text-lg">
              <span>არ გაქვთ ანგარიში?</span>{" "}
              <Link to="/register" className="text-blue-600">
                დარეგისტრირდი
              </Link>
            </div>
            <button className="bg-blue-600 text-2xl px-4 py-2 rounded-lg block mx-auto w-full">
              შესვლა
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
