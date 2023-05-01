import { Link, useNavigate } from "react-router-dom";
import uploadImg from "../assets/images/uploadimg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, useWatch } from "react-hook-form";
import { convertBase64 } from "../helpers/ConvertToBaseImage";

const AddNews = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const image = useWatch({ control, name: "thumbnail" });
  const [baseImage, setBaseImage] = useState();
  const [backendErrors, setBackendErrors] = useState();

  useEffect(() => {
    const baseImageSetter = async () => {
      const base = await convertBase64(image[0]);
      setBaseImage(base);
    };
    if (image) {
      baseImageSetter();
    }
  }, [image]);

  const submitHandler = async (data) => {
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("thumbnail", data.thumbnail[0]);
    let response = await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/create",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).catch((error) => {
      setBackendErrors(error.response.data.errors);
    });

    if (response?.statusText === "OK") {
      navigate("/");
    }
  };

  console.log(backendErrors);

  return (
    <div className="pb-20">
      <div className="flex justify-between items-center text-2xl md:text-xl">
        <h1>სიახლის დამატება</h1>
        <Link className="bg-blue-500 px-2 py-1 rounded-lg">ყველა სიახლე</Link>
      </div>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col items-center"
      >
        <div className="mt-10 max-w-[35rem] w-full ">
          <label className="block text-lg">სათაური</label>
          <input
            {...register("title", {
              required: "ეს ველი აუცილებელია",
              maxLength: { value: 250, message: "მაქსიმუმ 250 სიმბოლო" },
            })}
            className={`w-full bg-transparent border ${
              errors.title ? "border-red-500" : "border-white"
            } rounded-lg px-2 py-2 text-lg focus:outline-none focus:border-blue-500 transition-all`}
            type="text"
          />
          <p className="text-red-500 mt-1 h-2">
            {errors.title ? errors?.title.message : ""}
            {backendErrors?.title ? backendErrors.title : ""}
          </p>
        </div>
        <div className="mt-10 max-w-[35rem] w-full">
          <label className="block text-lg">სრული აღწერა</label>
          <textarea
            {...register("body", {
              required: "ეს ველი აუცილებელია",
            })}
            cols="30"
            rows="10"
            className={`bg-transparent border rounded-lg w-full text-lg px-2 py-2 ${
              errors.body ? "border-red-500" : "border-white"
            }`}
          ></textarea>
          <p className="text-red-500 mt-1 h-2">
            {errors.body ? errors?.body.message : ""}
            {backendErrors?.body ? backendErrors.body : ""}
          </p>
        </div>
        <div className="mt-10 max-w-[35rem] w-full">
          <label className="block text-lg ">ფოტო</label>
          <label
            htmlFor="imgupload"
            className={`border-dashed border-2 ${
              errors.thumbnail ? "border-red-500" : "border-white"
            } w-full rounded-lg px-4 py-4 h-80 flex flex-col items-center cursor-pointer`}
          >
            {!baseImage && (
              <>
                <label
                  htmlFor="imgupload"
                  className="bg-blue-500 px-2 py-2 text-lg mt-4 rounded-lg cursor-pointer"
                >
                  აირჩიე ფოტო
                </label>
                <img
                  className="w-10 h-10 mt-4 mb-4"
                  src={uploadImg}
                  alt="upp"
                />
              </>
            )}
            {baseImage && (
              <img
                src={baseImage}
                alt="this is uploaded image"
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            <input
              hidden
              id="imgupload"
              type="file"
              {...register("thumbnail", {
                required: "ეს ველი აუცილებელია",
              })}
            />
            <p className="text-red-500 mt-1 h-2">
              {errors.thumbnail ? errors?.thumbnail.message : ""}
              {backendErrors?.thumbnail ? backendErrors.thumbnail : ""}
            </p>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-2 py-2 text-xl rounded-lg mt-10 max-w-[35rem] w-full"
        >
          დამატება
        </button>
      </form>
    </div>
  );
};

export default AddNews;
