import React, { useState, useEffect, useCallback } from "react";

const Screen = ({ data, onNext, onSkip }) => {
  const [gradientPosition, setGradientPosition] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prevPosition) =>
        prevPosition > 0 ? prevPosition - 1 : 0
      );
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gradientPosition === 10) {
      onNext();
    }
  }, [gradientPosition]);

  useEffect(() => {
    setGradientPosition(100);
  }, [data]);

  return (
    <div className="flex w-full flex-col items-center justify-between h-[100vh] pt-10 px-7 pb-10">
      <div className="flex justify-end w-full">
        <h3
          onClick={onSkip}
          className="text-sm font-semibold cursor-pointer text-[#9FB2FF] underline"
        >
          skip
        </h3>
      </div>
      <img src={data?.img} alt="splash" />
      <div>
        <h1 className="text-2xl font-semibold">{data?.title}</h1>
        <p className="text-sm font-normal text-[#787878]">{data?.desc}</p>
      </div>

      <div className="flex justify-end w-full">
        <div
          className="p-2 rounded-full"
          style={{
            display: "grid",
            background: `conic-gradient(rgba(137, 161, 255, 1) ${gradientPosition}%, white 0%)`,
          }}
        >
          <button
            onClick={onNext}
            className="btn-next flex items-center justify-center"
          >
            <i className="bi bi-chevron-right text-white text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
