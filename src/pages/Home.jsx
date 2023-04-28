import { Link } from "react-router-dom";
import Header from "../components/sharedComponents/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-10 font-archy">
        {/* two main */}
        <div className="flex gap-10 lg:gap-8 sm:gap-2  lg:flex-col">
          <div className="w-1/2 lg:w-full bg-red-400 h-96 lg:h-80 sm:h-56 rounded-lg relative overflow-hidden">
            <img
              alt="news"
              src=" https://i.ytimg.com/vi_webp/z9pFhF69TK4/maxresdefault.webp"
              className="w-full h-full  object-cover"
            />
            <div className="bg-blackgr absolute top-0 left-0  w-full h-full z-40"></div>
            <p className="absolute bottom-4 text-2xl sm:text-base z-50 px-2">
              "გავყიდი ჩემს ნახატებს, ავიწყობ ცხოვრებას და წავალ" - დავით
              ალექსიძე
            </p>
          </div>

          <div className="w-1/2 lg:w-full bg-red-400 h-96 sm:h-56 rounded-lg relative overflow-hidden">
            <img
              alt="news"
              src=" https://phoebe.on.ge/2021/12/21/irakli_61c1ec4bb3c15.jpg"
              className="w-full h-full  object-cover"
            />
            <div className="bg-blackgr absolute top-0 left-0  w-full h-full z-40"></div>
            <p className="absolute bottom-4 left-0 text-2xl sm:text-base z-50 px-2">
              "გავყიდი ჩემს ნახატებს, ავიწყობ ცხოვრებას და წავალ" - დავით
              ალექსიძე
            </p>
          </div>
        </div>
        {/* three at row */}
        <div className="grid grid-cols-3 gap-9 mt-10 lg:grid-cols-2 md:grid-cols-1">
          <div className="bg-neutral-800  h-80 lg:h-[21.875rem] sm:h-[18rem] rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-52 md:h-64 sm:h-52 bg-blue-500">
              <img
                src="https://i.ytimg.com/vi/d9RNXceb8LY/maxresdefault.jpg"
                alt="kki"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl flex-grow flex items-center px-2">
              დიდი პაუზის შემდეგ შუა ქალაქში ეკრანებზე ბრუნდება
            </p>
          </div>
          <div className="bg-neutral-800 h-80 lg:h-[21.875rem] sm:h-[18rem] rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-52 md:h-64 sm:h-52 bg-blue-500">
              <img
                src="https://i.ytimg.com/vi/EuL53CVbYL8/maxresdefault.jpg"
                alt="kki"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl flex-grow flex items-center px-2">
              "ირაკლი, მგონი რაღაც კარგად ვერ არის" - ლაშა ტორონჯაძე
            </p>
          </div>
          <div className="bg-neutral-800  h-80 lg:h-[21.875rem] sm:h-[18rem] rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-52 md:h-64 sm:h-52 bg-blue-500">
              <img
                src="https://i.ytimg.com/vi/l1RtSKYxK_A/maxresdefault.jpg"
                alt="kki"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl flex-grow flex items-center px-2">
              ცნობილია - ვინ არის სინამდვილეში დედას ბუშტი
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
