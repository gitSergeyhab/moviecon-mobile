import { useEffect, useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";

export const useScrollToEnd = <T>(params: T[]) => {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (params?.length) {
      scrollRef.current?.scrollToEnd({ animated: true });
    }
  }, [params]);

  return scrollRef;
};
