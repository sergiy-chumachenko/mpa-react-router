import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRoot";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {index: true, element:<Home/>},
            {
                path: "events",
                element: <EventRootLayout/>,
                children: [
                    {index: true, element: <Events/>},
                    {path: ":eventId", element:<EventDetail/>},
                    {path: "new", element:<NewEvent/>},
                    {path: ":eventId/edit", element:<EditEvent/>},
                ]
            },
        ]
    },
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;