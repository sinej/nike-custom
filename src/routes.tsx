import {
    Route,
    createRoutesFromElements,
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages";


export const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />} />
        </Route>
    )
);
