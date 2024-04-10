import { RouteObject } from "react-router"; //  RouteObject type from react-router
import Layout from "../layout"; 
import Boards from "../pages/Boards"; 

// Defining an array of RouteObject objects
const routes: RouteObject[] = [
    {
        path: "/", // The path for this route
        element: <Layout />, // The component to render for this route
        children: [ // Nested routes under this route
            {
                children: [ // More nested routes
                    {
                        path: "", // The path for this nested route
                        element: <Boards />, // The component to render for this nested route
                    },
                ],
            },
        ],
    },
];

export default routes;
