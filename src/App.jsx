import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./index/homepage";
import OurHotelPage from "./OurHotelPage";
import ClubItc from "./ClubItc";
import Meeting from "./Meeting";
import Destinations from "./Destination/Destinations";
import Offers from "./Offers";
import Wedding from "./Wedding";
import Register from "./Register";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import SleepBoutique from "./SleepBoutique";
import ErrorFound from "./ErrorFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Directly rendering Home component
    errorElement: <ErrorFound />, // Displayed when an error occurs
  },
  { path: "/OurHotelPage", element: <OurHotelPage /> },
  { path: "/ClubItc", element: <ClubItc /> },
  { path: "/Meeting", element: <Meeting /> },
  { path: "/Destinations", element: <Destinations /> },
  { path: "/Offers", element: <Offers /> },
  { path: "/SleepBoutique", element: <SleepBoutique /> },
  { path: "/Wedding", element: <Wedding /> },
  { path: "/Register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  { path: "/ForgetPassword", element: <ForgetPassword /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;