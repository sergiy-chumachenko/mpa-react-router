import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import EventsPage , {loader as eventsLoader} from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRoot";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {index: true, element:<HomePage/>},
            {
                path: "events",
                element: <EventRootLayout/>,
                children: [
                    {index: true, element: <EventsPage/>, loader: eventsLoader},
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