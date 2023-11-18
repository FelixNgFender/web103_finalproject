import { NotFound } from "../pages";

import { Home, Profile, SetAvailability, FindSessions } from "../pages";

export const publicRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/view", element: <FindSessions /> },
  { path: "/availability", element: <SetAvailability /> },
  { path: "/*", element: <NotFound /> },
];
