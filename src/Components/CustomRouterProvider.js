import React from "react";
import { RouterProvider } from "react-router-dom";

const CustomRouterProvider = (props) => {
  // Add any custom logic here if needed
  return <RouterProvider {...props} />;
};

export default CustomRouterProvider;
