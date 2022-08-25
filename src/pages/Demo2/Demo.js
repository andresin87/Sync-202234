import { forwardRef, useRef, useCallback } from "react";
// https://github.com/SUI-Components/adevinta-spain-components/blob/master/components/react/hooks/src/useMergeRefs/index.js
import useMergeRefs from "@s-ui/react-hooks/lib/useMergeRefs";

export const getClickHandler = (ref) => () => {
  ref.current.focus();
};

const Demo = forwardRef(({ children }, forwardedRef) => {
  const innerRef = useRef();
  const refs = [innerRef, forwardedRef];

  const ref = useMergeRefs(...refs);
  // const ref = useCallback((node) => {
  //    refs.forEach((ref) => {
  //    if (typeof ref === "function") ref(node);
  //    else if (ref !== null) ref.current = node;
  //  });
  //}, refs);

  const handleClick = useCallback(getClickHandler(innerRef), []);

  return (
    <>
      {children}
      <input ref={ref} />
      <button onClick={handleClick}>inner focus</button>
    </>
  );
});

export default Demo;
