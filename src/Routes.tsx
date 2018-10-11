import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { ProductsPage } from "./pages";
const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={ProductsPage} />
    </Switch>
  );
};

export default Routes;
