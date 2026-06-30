import { Tabs } from "expo-router";
import { CustomTabBar } from "../../components/CustomTabBar";

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="learn" options={{ headerShown: false }} />
      <Tabs.Screen name="ai-teacher" options={{ headerShown: false }} />
      <Tabs.Screen name="chat" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
}
