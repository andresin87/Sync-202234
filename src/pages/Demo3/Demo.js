import { useState, useCallback } from "react";

const set = (setter, diff) => () => setter((value) => value + diff);

const Demo = () => {
  const [value, setValue] = useState(0);
  // const reduce = useCallback(() => setValue(value - 1));
  // const increase = useCallback(() => setValue(value + 1));

  const reduce = useCallback(set(setValue, -1), []);
  const increase = useCallback(set(setValue, +1), []);
  return (
    <>
      <button onClick={reduce}> - </button> {value}{" "}
      <button onClick={increase}> + </button>
    </>
  );
};

export default Demo;
