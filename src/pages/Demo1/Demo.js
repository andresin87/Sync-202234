import { useEffect, useLayoutEffect, useRef } from "react";

const Demo = () => {
  const ref = useRef();

  const log = (cycle) => () => {
    console.log(`--> ${cycle}`, { current: ref?.current });
    return () => console.log(`<-- ${cycle}`, { current: ref?.current });
  };

  useEffect(log("useEffect 1"), []);
  useEffect(log("useEffect 2"), []);
  useLayoutEffect(log("useLayoutEffect 1"), []);
  useLayoutEffect(log("useLayoutEffect 2"), []);

  return <input ref={ref} />;
};

export default Demo;
