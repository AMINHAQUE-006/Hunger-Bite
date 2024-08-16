
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import 'flowbite';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/Cart";
const About = lazy(() => import('./components/About'))

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "amin",
        email: "amin@gmail.com"
    })
    
    return (
    <Provider store={store}>
        <userContext.Provider
        value={{
            user: user,
            setUser: setUser
        }}
        >
        <Header />
        <Outlet />
        <Footer />  
        </userContext.Provider>
    </Provider>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
                children: []
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]

    }

])

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<RouterProvider router={router}/>);

