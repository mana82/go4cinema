import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
} from "react-router-dom";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./media/style/style.css"
import Search from "./pages/search";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/movies/:id",
                element: <Single />,
            },
            {
                path: "/new",
                element: <AddNew />,
            },
            {
                path: "/find",
                element: <Search />,
            },
            {
                path: "/find/:params",
                element: <Search />,
            }
        ],
    },
]);

function App() {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;