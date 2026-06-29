import { useAuth, useClerk } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return (
    <View
      className="flex-1 justify-center items-center bg-white"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
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
      <TouchableOpacity
        style={{
          marginTop: 32,
          backgroundColor: "#6C4EF5",
          borderRadius: 14,
          paddingHorizontal: 32,
          paddingVertical: 14,
        }}
        onPress={() => router.push("/onboarding")}
        activeOpacity={0.85}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins-SemiBold",
            color: "#FFFFFF",
          }}
        >
          View Onboarding
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 16,
          backgroundColor: "#6C4EF5",
          borderRadius: 14,
          paddingHorizontal: 32,
          paddingVertical: 14,
        }}
        onPress={() => router.push("/language-selection")}
        activeOpacity={0.85}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins-SemiBold",
            color: "#FFFFFF",
          }}
        >
          Choose Language
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 16,
          borderWidth: 1,
          borderColor: "#6C4EF5",
          borderRadius: 14,
          paddingHorizontal: 32,
          paddingVertical: 14,
        }}
        onPress={() => signOut()}
        activeOpacity={0.85}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins-SemiBold",
            color: "#6C4EF5",
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
