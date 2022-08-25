import PageLayout from "../../components/PageLayout";
import Demo from "./Demo";

const Page = () => (
  <PageLayout title={Page.title}>
    <Demo />
  </PageLayout>
);

Page.title = "Differences between useEffect and useLayoutEffect";

export default Page;
