import { useCallback } from "react";

import Injector from "@s-ui/react-primitive-injector";

const clickHandler = (string) => () => console.log(`firing ${string}`);

const Demo = () => {
  const handleClickInjector = useCallback(clickHandler("injector"), []);
  const handleClickLabel = useCallback(clickHandler("label"), []);
  const handleClickInput = useCallback(clickHandler("input"), []);
  const handleClickButton = useCallback(clickHandler("button"), []);

  return (
    <Injector
      className="injector"
      onClick={handleClickInjector}
      data-injector="injector"
      style={{
        marginLeft: 4,
        marginRight: 4,
        border: "1px solid var(--c-font)"
      }}
    >
      <label
        className="label"
        onClick={handleClickLabel}
        style={{ marginLeft: 0 }}
      >
        label
      </label>
      <input
        className="input"
        onClick={handleClickInput}
        data-injector="input"
      />
      <button
        className="button"
        onClick={handleClickButton}
        style={{ marginRight: 0 }}
      >
        button
      </button>
    </Injector>
  );
};

export default Demo;
