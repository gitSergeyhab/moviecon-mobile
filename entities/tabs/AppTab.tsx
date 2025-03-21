// import { Tabs } from "expo-router";
// import React, { FC } from "react";
// import { IconSymbol } from "@/shared/components/ui/IconSymbol";

// export interface AppTabProps {
//   name: string;
//   iconName: string;
//   title: string;
// }

// export const AppTab: FC<AppTabProps> = ({ iconName, name, title }) => {
//   return (
//     <Tabs.Screen
//       name={name}
//       options={{
//         title,
//         tabBarIcon: ({ color }) => (
//           <IconSymbol size={28} name={iconName} color={color} />
//         ),
//       }}
//     />
//   );
// };

import { Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";

export interface AppTabProps {
  name: string;
  iconName: string;
  title: string;
}

export const createAppTab = ({ iconName, name, title }: AppTabProps) => {
  return (
    <Tabs.Screen
      key={name}
      name={name}
      options={{
        title,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name={iconName} color={color} />
        ),
      }}
    />
  );
};
