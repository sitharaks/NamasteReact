import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import router from "./router"; // Ensure this is a valid router configuration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		{/* Replace RouterProvider with BrowserRouter */}
	</BrowserRouter>
);
