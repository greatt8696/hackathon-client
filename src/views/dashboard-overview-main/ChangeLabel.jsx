import React, { useEffect, useRef, useState } from "react";
import { Lucide } from "@/base-components";

const ChangeLabel = (props) => {
  const { coin, text } = props;
  const [tempCoin, setTempCoin] = useState();
  const [changeLabel, setchangeLabel] = useState("");
  const [isup, setUp] = useState(true);
  const [icon, setIcon] = useState("ChevronUp");
  const priceRef = useRef();
  const changeRef = useRef();

  useEffect(() => {
    if (coin !== undefined) setTempCoin(coin);
  }, [coin]);

  useEffect(() => {
    if (coin !== undefined) {
      if (coin.change === "RISE") {
        setUp(true);
        setIcon("ChevronUp");
        priceRef.current.classList.add("animate-blink-ba-red");
        priceRef.current.classList.add("text-white");
      } else {
        setUp(false);
        setIcon("ChevronDown");
        priceRef.current.classList.add("animate-blink-ba-blue");
        priceRef.current.classList.add("text-white");
      }
      setchangeLabel(`${(coin.change_rate * 100).toFixed(2)} %`);
    }
  }, [coin]);

  const animationEndHandler = () => {
    priceRef.current.classList.remove("animate-blink-ba-blue");
    priceRef.current.classList.remove("animate-blink-ba-red");
    priceRef.current.classList.remove("text-white");
    changeRef.current.classList.remove("animate-blink-ba-blue");
    changeRef.current.classList.remove("animate-blink-ba-blue");
    changeRef.current.classList.remove("text-white");
  };

  return (
    <div className="flex" ref={priceRef} onAnimationEnd={animationEndHandler}>
      <div
        ref={priceRef}
        className={`
        ${isup ? "text-red-500" : "text-blue-500"} ${text} font-medium ml-2`}
        onAnimationEnd={animationEndHandler}
      >
        {coin.trade_price}
      </div>
      <div
        ref={changeRef}
        onAnimationEnd={animationEndHandler}
        className={`${
          isup ? "text-red-500" : "text-blue-500"
        }  text-xs font-medium ml-2 flex mt-3`}
      >
        {changeLabel}
        <Lucide
          icon={icon}
          className={`w-4 h-4 ml-0.5 ${
            isup ? "text-red-500" : "text-blue-500"
          }`}
        />
      </div>
    </div>
  );
};

export default React.memo(ChangeLabel);
