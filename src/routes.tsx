import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import NotFound from "./pages/404";
import Forbidden from "./pages/403";
import InternalError from "./pages/500";
import { Main } from "./pages/main";

interface ObjectLiteral<P = any> {
  [key: string]: P;
}

interface RouteType {
  name: string;
  path: string;
  component: React.ComponentType;
  props?: ObjectLiteral;
  exact?: boolean;
}

export const routes: RouteType[] = [
  {
    name: "react",
    path: "/react",
    component: Main,
    exact: true,
  },
  {
    name: "403",
    path: "/react/403",
    component: Forbidden,
  },
  {
    name: "500",
    path: "/react/500",
    component: InternalError,
  },
];

const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route {...route} key={route.name} />
    ))}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
