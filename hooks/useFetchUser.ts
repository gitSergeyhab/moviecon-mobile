// import { useGetUser } from "@/entities/auth/userHooks";
// import { request } from "@/lib/api";
// import { getTokens, saveTokens } from "@/lib/tokens";
// import { RequestStatus } from "@/types/api";
// import { UserInfo, UserWithTokens } from "@/types/user";
// import { useEffect, useState } from "react";

// const requestUser$ = async () => {
//   const token = await getTokens();
//   const access = token?.accessToken;
//   if (!access) return null;
//   try {
//     const data = await request.get<UserWithTokens>("/auth/user/");
//     console.log({ data }, "requestUser");
//     return data;
//   } catch (error) {
//     console.error({ error }, "requestUserError________________!!!!");
//     return null;
//   }
// };

// export const useFetchUser = () => {
//   const [status, setStatus] = useState<RequestStatus>("idle");
//   const [user, setUser] = useState<UserInfo | null>(null);
//   const currentUser = useGetUser();

//   useEffect(() => {
//     if (currentUser) {
//       setStatus("success");
//       setUser(currentUser);
//       return;
//     }
//     setStatus("loading");
//     requestUser$().then((response) => {
//       console.log({ response });
//       if (response) {
//         setStatus("success");
//         const { tokens, ...user } = response;
//         console.log({ user });
//         saveTokens(tokens);
//         setUser(user);
//       } else {
//         setStatus("error");
//       }
//     });
//   }, []);

//   return { status, user };
// };
