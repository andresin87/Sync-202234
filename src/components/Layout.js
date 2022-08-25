import { Outlet, Link } from "react-router-dom";

import { Home, Demo1, Demo2, Demo3, Demo4 } from "../pages";

const Layout = () => (
  <>
    <div className="content">
      <Outlet />
    </div>
    <nav>
      <ul>
        <li>
          <Link to={encodeURI(Home.title)}>{Home.title}</Link>
        </li>
        <li>
          <Link to={encodeURI(Demo1.title)}>{Demo1.title}</Link>
        </li>
        <li>
          <Link to={encodeURI(Demo2.title)}>{Demo2.title}</Link>
        </li>
        <li>
          <Link to={encodeURI(Demo3.title)}>{Demo3.title}</Link>
        </li>
        <li>
          <Link to={encodeURI(Demo4.title)}>{Demo4.title}</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Layout;
