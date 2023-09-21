import {
   createBrowserRouter,
} from "react-router-dom";

import Layout from "../views/layout/Layout";
import Home from "../views/home/Home";
// import {loader as sliderLoader} from "../components/slider/Slider";
// import {loader as newLoader} from "../components/new-tile/loader";

const routes = createBrowserRouter(
   [
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               index: true,
               element: <Home />,
            }
         ]
      }
   ]
)

export default routes;