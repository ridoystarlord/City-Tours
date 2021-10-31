import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/homepage/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Notfound from "./components/common/Notfound/Notfound";
import Ourservices from "./components/Ourservices/Ourservices";
import Register from "./components/common/userAuthentication/Register/Register";
import Packages from "./components/homepage/Packages/Packages";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Authprovider from "./context/Authprovider";
import MyBookings from "./components/MyBookings/MyBookings";
import ManageAllBookings from "./components/ManageAllBookings/ManageAllBookings";
import Privateroute from "./components/common/userAuthentication/Privateroute/Privateroute";
import PackagesDetails from "./components/PackagesDetails/PackagesDetails";
import Addanewplace from "./components/Addanewplace/Addanewplace";

function App() {
  return (
    <div>
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/our-services">
              <Ourservices></Ourservices>
            </Route>
            <Route path="/register-login">
              <Register></Register>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <Privateroute path="/my-bookings">
              <MyBookings></MyBookings>
            </Privateroute>
            <Privateroute path="/packages-details/:id">
              <PackagesDetails></PackagesDetails>
            </Privateroute>
            <Privateroute path="/manage-all-bookings">
              <ManageAllBookings></ManageAllBookings>
            </Privateroute>
            <Privateroute path="/add-a-new-place">
              <Addanewplace></Addanewplace>
            </Privateroute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
