import { useCallback, useRef } from "react";

import PageLayout from "../../components/PageLayout";
import Demo, { getClickHandler } from "./Demo";

const Page = () => {
  const ref = useRef();

  const handleClick = useCallback(getClickHandler(ref), []);

  return (
    <PageLayout title={Page.title}>
      <Demo ref={ref}>
        <button onClick={handleClick}>parent focus</button>
      </Demo>
    </PageLayout>
  );
};

Page.title = "The weird parts of forwardRef";

export default Page;
