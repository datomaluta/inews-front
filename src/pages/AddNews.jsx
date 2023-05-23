import { Link, useNavigate, useParams } from "react-router-dom";
import uploadImg from "../assets/images/uploadimg.png";
import { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { convertBase64 } from "../helpers/ConvertToBaseImage";
import {
  createNews,
  getAllCategories,
  updateNews,
} from "../services/newsService";
import useGetData from "../hooks/useGetData";
import { fetchCSRFToken } from "../services/UserService";
import Select from "react-select";
import Theme from "../components/headerComponents/Theme";

const AddNews = (props) => {
  const formData = new FormData();
  const navigate = useNavigate();
  const { id } = useParams();
  const [baseImage, setBaseImage] = useState();
  const [backendErrors, setBackendErrors] = useState();

  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [defaultOptions, setDefaultOptions] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllCategories().catch((error) =>
        console.log(error)
      );
      setCategories(response.data.data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      let opts = categories.map((category) => {
        return { value: category.id, label: category.name };
      });
      setOptions(opts);
    }
  }, [categories]);

  useEffect(() => {
    if (props.action === "update") {
      fetchCertainNews();
    }
  }, []);

  const {
    data: news,
    fetchData: fetchCertainNews,
    error: newsError,
  } = useGetData(`/api/news/${id}`, true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const image = useWatch({ control, name: "thumbnail" });

  useEffect(() => {
    if (news && defaultOptions) {
      reset({
        title: news.title,
        body: news.body,
        category: defaultOptions,
      });
    }
  }, [news, defaultOptions]);

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
    formData.append("category", JSON.stringify(data.category));
    {
      data.thumbnail.length !== 0 &&
        formData.append("thumbnail", data.thumbnail[0]);
    }
    {
      props.action === "update" && formData.append("_method", "put");
    }

    let response;
    await fetchCSRFToken();
    if (props.action === "create") {
      response = await createNews(formData).catch((error) =>
        setBackendErrors(error.response.data.errors)
      );
    } else {
      response = await updateNews(id, formData).catch((error) => {
        setBackendErrors(error.response.data.errors);
      });
    }

    if (response?.statusText === "OK") {
      navigate("/admin/news");
    }
  };

  useEffect(() => {
    if (news && options) {
      let opts = news?.categories.map((category) => {
        return { value: category.id, label: category.name };
      });
      setDefaultOptions(opts);
    }
  }, [news, options]);

  const categoryInputStyles = {
    control: (provided, state) => ({
      ...provided,
      color: "red",
      width: "full",
      border: "1px solid #1C5EC3",
      borderRadius: "4px",
      boxShadow: state.isFocused ? "0 0 0 2px blue" : "none",
    }),
    input: (provided) => ({
      ...provided,
      color: "blue",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "blue" : "white",
    }),
  };

  console.log(errors);

  return (
    <div className="pb-20 px-8 sm:px-3">
      <div className="flex justify-between items-center sm:text-sm">
        <div className="flex items-center gap-2">
          <h1>სიახლის დამატება</h1>
          <Theme />
        </div>
        <Link
          to="/admin/news"
          className="bg-blue-500 px-2 py-1 rounded-lg text-white"
        >
          ყველა სიახლე
        </Link>
      </div>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col items-center"
      >
        <div className="mt-10 max-w-[35rem] w-full ">
          <label className="block">სათაური</label>
          <input
            {...register("title", {
              required: "ეს ველი აუცილებელია",
              maxLength: { value: 250, message: "მაქსიმუმ 250 სიმბოლო" },
            })}
            className={`w-full bg-transparent border font-sans text-base ${
              errors.title
                ? "border-red-500"
                : "dark:border-white border-primary"
            } rounded-lg px-2 py-2 focus:outline-none focus:border-blue-500 transition-all`}
            type="text"
          />
          <p className="text-red-500 mt-1 h-2 text-sm">
            {errors.title ? errors?.title.message : ""}
            {backendErrors?.title ? backendErrors.title : ""}
          </p>
        </div>
        <div className=" w-full max-w-[35rem] mt-8">
          <label htmlFor="" className="mb-1 block">
            კატეგორია
          </label>
          {options.length > 0 && (
            <Controller
              name="category"
              control={control}
              rules={{ required: "ეს ველი აუცილებელია" }}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={options}
                  styles={categoryInputStyles}
                />
              )}
            />
          )}
          <p className="text-red-500 mt-1 h-2 text-sm">
            {errors.category ? errors?.category.message : ""}
          </p>
        </div>
        <div className="mt-10 max-w-[35rem] w-full">
          <label className="block">სრული აღწერა</label>
          <textarea
            {...register("body", {
              required: "ეს ველი აუცილებელია",
            })}
            cols="30"
            rows="10"
            className={`bg-transparent border rounded-lg w-full  font-sans px-2 py-2 ${
              errors.body
                ? "border-red-500"
                : "dark:border-white border-primary"
            }`}
          ></textarea>
          <p className="text-red-500 mt-1 h-2 text-sm">
            {errors.body ? errors?.body.message : ""}
            {backendErrors?.body ? backendErrors.body : ""}
          </p>
        </div>
        <div className="mt-10 max-w-[35rem] w-full">
          <label className="block">ფოტო</label>
          <label
            htmlFor="imgupload"
            className={`border-dashed border-2 ${
              errors.thumbnail
                ? "border-red-500"
                : "dark:border-white border-primary"
            } w-full rounded-lg px-4 py-4 h-80 md:h-52 flex flex-col items-center cursor-pointer`}
          >
            {!baseImage && (
              <>
                <label
                  htmlFor="imgupload"
                  className="bg-blue-500 px-2 py-2  mt-4 rounded-lg cursor-pointer text-white"
                >
                  აირჩიე ფოტო
                </label>
                {props.action === "create" && (
                  <img
                    className="w-10 h-10 mt-4 mb-4"
                    src={uploadImg}
                    alt="upp"
                  />
                )}
                {props.action === "update" && news?.thumbnail && (
                  <img
                    src={`${import.meta.env.VITE_BACNEKD_URL}/storage/${
                      news?.thumbnail
                    }`}
                    alt="img from db"
                    className="w-32 rounded-lg h-20 object-cover mt-4"
                  />
                )}
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
                required:
                  props.action === "create" ? "ეს ველი აუცილებელია" : false,
              })}
            />
            <p className="text-red-500 mt-1 h-2 text-sm">
              {errors.thumbnail ? errors?.thumbnail.message : ""}
              {backendErrors?.thumbnail ? backendErrors.thumbnail : ""}
            </p>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-2 py-2 rounded-lg mt-10 max-w-[35rem] w-full text-white"
        >
          დამატება
        </button>
      </form>
    </div>
  );
};

export default AddNews;
