import { Children, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = ({ start, end, duration, Children }) => {
  const [counterOn, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div>
        {counterOn && (
          <CountUp start={start} end={end} duration={duration}></CountUp>
        )}
        {Children}
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
