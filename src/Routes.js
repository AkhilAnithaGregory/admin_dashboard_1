import { Route, Routes } from "react-router";
import * as Pages from "./pages";

export const RouteNavigation = {
  home: "/",
};

const GenericRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={RouteNavigation.home} element={<Pages.HomePage />} />
      </Routes>
    </div>
  );
};
export default GenericRoutes;
