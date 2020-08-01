import React from "react";
import { renderRoutes } from "react-router-config";
function Home(props) {
  const { route } = props;
  return (
    <>
      <div>Home</div>
      {renderRoutes(route.routes)}
    </>
  );
}

export default React.memo(Home);
