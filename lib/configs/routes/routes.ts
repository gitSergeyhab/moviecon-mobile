const appRoutes = {
  main: "/",
  auth: {
    login: "/auth",
    register: "/auth/register",
  },
  profile: "/profile",
  about: "/about",
  gameSelection: "/game",
  game: "/game/:gameId",
  stats: "/stats",
  admin: "/admin",
} as const;
export default appRoutes;


