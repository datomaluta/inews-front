const OneMainNews = ({ children }) => {
  // max-h-[30rem] lg:max-h-[35rem] sm:min-h-[42rem]
  return (
    <div className="flex lg:flex-col  gap-4 rounded-lg font-bpg mb-8 min-h-[33rem] text-white">
      {children}
    </div>
  );
};

export default OneMainNews;
