import { Home, Profile, SetAvailability, FindSessions } from "../pages";

export const protectedRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/view", element: <FindSessions /> },
  { path: "/availability", element: <SetAvailability /> },
];
