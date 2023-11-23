import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import UserProfile from "views/UserProfile.js";
import LoginPage from "views/Login/Login.js"
import OrderManagement from "views/OrderManagement/OrderManagement";
import Wallet from "views/WalletTransaction/Wallet";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/stock",
  },
  {
    path: "/order_management",
    name: "Order Management",
    icon: "tim-icons icon-basket-simple",
    component: <OrderManagement />,
    layout: "/stock",
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: "tim-icons icon-bank",
    component: < Wallet/>,
    layout: "/stock",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "tim-icons icon-atom",
  //   component: <Icons />,
  //   layout: "/stock",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "tim-icons icon-bell-55",
  //   component: <Notifications />,
  //   layout: "/stock",
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/stock",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <TableList />,
  //   layout: "/stock",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/stock",
  // },
];
export default routes;
