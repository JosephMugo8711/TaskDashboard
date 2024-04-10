import { useRoutes } from "react-router"; // UseRoutes hook from react-router
import routes from "./routes"; // routes configuration 

function App() {
    // Using the useRoutes hook to match the current URL path to a route configuration and return the corresponding element (component)
    const element = useRoutes(routes);

    // Rendering the element (component) returned by useRoutes
    return <>{element}</>;
}

export default App; 
