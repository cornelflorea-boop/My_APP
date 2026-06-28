import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        className="text-center text-lingua-purple"
        style={{ fontSize: 32, fontFamily: "Poppins-Bold", color: "#4200f7" }}
      >
        Hello Lingua
      </Text>
      <Text
        className="text-center mt-4"
        style={{ fontSize: 14, fontFamily: "Poppins-Bold", color: "#4200f7" }}
      >
        Design system is working
      </Text>
    </View>
  );
}
