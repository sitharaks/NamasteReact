import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./Components/Header";
import Body from "./Components/Body";
import AboutUs from "./Components/AboutUs";
import ContactUS from "./Components/ContactUs";
import ResMenu from "./Components/ResMenu";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResMenu from "./Components/ResMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Footer = () => {
    return (
        <div className="footer">
            <h1></h1>
        </div>
    )
}
const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/contact",
                element: <ContactUS />,
            },
             {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurant/:resId",
                element: <ResMenu />,
            }
        ]
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)