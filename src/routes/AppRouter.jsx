import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import MainLayout from './../Layouts/MainLayout';
import Landing from './../pages/Landing';
import Events from './../pages/Events';
import Achievements from './../pages/Achievements';
import History from './../pages/History';
import EventDetails from './../components/stpMain/Events/EventDetails';
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // ✅ this should be a single element
        children: [
            {path: "/", element: <Landing />},
            {path: "home", element: <Landing />},
            {path: "events", element: <Events />},
            {path: "/events/:id", element: <EventDetails />},
            {path: "achievements", element: <Achievements />},
            {path: "history", element: <History />},
            {path: "register", element: <Landing />},
        ],
    },
]);

export default function AppRouter () {
    return (
        <RouterProvider router={router} />
    )
}


