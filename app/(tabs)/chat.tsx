import { View, Text } from "react-native";

export default function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
      <Text style={{ fontSize: 24, fontFamily: "Poppins-SemiBold", color: "#0D132B" }}>
        Chat
      </Text>
    </View>
  );
}
