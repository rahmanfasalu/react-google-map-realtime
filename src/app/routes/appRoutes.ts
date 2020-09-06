import Home from "../@modules/home/Home";
import RouteType from "../interfaces/route.type";

export const appRoutes: RouteType[] = [
  { path: "/", exact: true, component: Home },
  { path: "/home", exact: false, component: Home },
];

export default appRoutes;
