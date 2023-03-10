import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import EventsPage , {loader as eventsLoader} from "./pages/Events";
import EventDetail, {loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRoot";
import ErrorPage from "./pages/Error";
import { action as manipulateEventAction } from './components/EventForm'
import NewsletterPage, {action as newsletterAction} from "./pages/Newsletter";
import AuthenticationPage, {action as authAction} from "./pages/Authentication";
import {action as logoutAction } from './pages/Logout';
import { tokenLoader, checkAuthToken } from './util/auth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        loader: tokenLoader,
        id: 'root',
        children: [
            {index: true, element:<HomePage/>},
            {
                path: "events",
                element: <EventRootLayout/>,
                children: [
                    {index: true, element: <EventsPage/>, loader: eventsLoader},
                    {path: ':eventId', id: 'event-detail', loader:eventDetailLoader, children: [
                        {index: true, element: <EventDetail/>, action:deleteEventAction},
                        {path: "edit", element:<EditEvent/>, action: manipulateEventAction, loader: checkAuthToken},
                        ],
                    },
                    {path: "new", element:<NewEvent/>, action: manipulateEventAction, loader: checkAuthToken},
                ]
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction,
            },
            {
                path: 'auth',
                element: <AuthenticationPage/>,
                action: authAction,
            },
            {
                path: 'logout',
                action: logoutAction,
            },
        ]
    },
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;