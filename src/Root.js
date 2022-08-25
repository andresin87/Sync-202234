import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import { Home, Demo1, Demo2, Demo3, Demo4 } from "./pages";

const Root = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={encodeURI(Demo1.title)} element={<Demo1 />} />
      <Route path={encodeURI(Demo2.title)} element={<Demo2 />} />
      <Route path={encodeURI(Demo3.title)} element={<Demo3 />} />
      <Route path={encodeURI(Demo4.title)} element={<Demo4 />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);

export default Root;
