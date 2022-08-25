import PageLayout from "../../components/PageLayout";
import Demo from "./Demo";

const Page = () => (
  <PageLayout title={Page.title}>
    <Demo />
  </PageLayout>
);

Page.title = "Reusing handlers";

export default Page;
