import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        {/* Logo + App Name */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 32,
          }}
        >
          <Image
            source={require("../assets/images/moscot-logo.png")}
            style={{ width: 44, height: 44 }}
            resizeMode="contain"
          />
          <Text
            style={{
              marginLeft: 8,
              fontSize: 22,
              fontFamily: "Poppins-SemiBold",
              color: "#0D132B",
            }}
          >
            muolingo
          </Text>
        </View>

        {/* Headline */}
        <View style={{ marginBottom: 14 }}>
          <Text
            style={{
              fontSize: 34,
              fontFamily: "Poppins-Bold",
              color: "#0D132B",
              lineHeight: 42,
            }}
          >
            Your AI language
          </Text>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text
              style={{
                fontSize: 34,
                fontFamily: "Poppins-Bold",
                color: "#6C4EF5",
                lineHeight: 42,
              }}
            >
              teacher
            </Text>
            <Text
              style={{
                fontSize: 34,
                fontFamily: "Poppins-Bold",
                color: "#0D132B",
                lineHeight: 42,
              }}
            >
              .
            </Text>
          </View>
        </View>

        {/* Subtitle */}
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Poppins-Regular",
            color: "#6B7280",
            lineHeight: 24,
            marginBottom: 16,
          }}
        >
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        {/* Mascot illustration with speech bubbles */}
        <View
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Hello! bubble — left */}
          <View
            style={{
              position: "absolute",
              left: 0,
              top: "28%",
              zIndex: 10,
              backgroundColor: "#EFF6FF",
              borderRadius: 20,
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "#0D132B",
              }}
            >
              Hello!
            </Text>
          </View>

          {/* ¡Hola! bubble — top right */}
          <View
            style={{
              position: "absolute",
              right: 0,
              top: "5%",
              zIndex: 10,
              backgroundColor: "#EDEBFF",
              borderRadius: 20,
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "#6C4EF5",
              }}
            >
              ¡Hola!
            </Text>
          </View>

          {/* Mascot image */}
          <Image
            source={require("../assets/images/mascot-welcome.png")}
            style={{ width: 280, height: 280 }}
            resizeMode="contain"
          />

          {/* 你好! bubble — right */}
          <View
            style={{
              position: "absolute",
              right: 0,
              top: "52%",
              zIndex: 10,
              backgroundColor: "#FFF0F0",
              borderRadius: 20,
              paddingHorizontal: 18,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "#FF4D4F",
              }}
            >
              你好!
            </Text>
          </View>
        </View>
      </View>

      {/* Get Started Button */}
      <View style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#6C4EF5",
            borderRadius: 20,
            paddingVertical: 18,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.back()}
          activeOpacity={0.85}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-SemiBold",
              color: "#FFFFFF",
            }}
          >
            Get Started
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Poppins-Bold",
              color: "#FFFFFF",
              marginLeft: 10,
            }}
          >
            ›
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
