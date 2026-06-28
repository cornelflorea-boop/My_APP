import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { colors } from "../theme";
import VerificationModal from "../components/VerificationModal";

function SocialButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.neutral.border,
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom: 12,
        backgroundColor: colors.neutral.background,
      }}
      activeOpacity={0.85}
    >
      <View style={{ width: 24, alignItems: "center" }}>{icon}</View>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontSize: 15,
          fontFamily: "Poppins-Medium",
          color: colors.neutral.textPrimary,
          marginRight: 24,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          paddingBottom: 32,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginTop: 16, marginBottom: 24, alignSelf: "flex-start" }}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name="chevron-back"
            size={28}
            color={colors.neutral.textPrimary}
          />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Poppins-Bold",
            color: colors.neutral.textPrimary,
            marginBottom: 6,
          }}
        >
          Welcome back
        </Text>

        {/* Subtitle */}
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Poppins-Regular",
            color: colors.neutral.textSecondary,
            marginBottom: 20,
          }}
        >
          Sign in to continue your journey ✨
        </Text>

        {/* Mascot */}
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Image
            source={require("../assets/images/mascot-auth.png")}
            style={{ width: 140, height: 140 }}
            resizeMode="contain"
          />
        </View>

        {/* Email Input */}
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.neutral.border,
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins-Regular",
              color: colors.neutral.textSecondary,
              marginBottom: 2,
            }}
          >
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="your@email.com"
            placeholderTextColor={colors.neutral.border}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            style={{
              fontSize: 15,
              fontFamily: "Poppins-Regular",
              color: colors.neutral.textPrimary,
              padding: 0,
            }}
          />
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: colors.primary.purple,
            borderRadius: 20,
            paddingVertical: 18,
            alignItems: "center",
            marginBottom: 24,
          }}
          activeOpacity={0.85}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Poppins-SemiBold",
              color: "#FFFFFF",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colors.neutral.border,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Poppins-Regular",
              color: colors.neutral.textSecondary,
              marginHorizontal: 12,
            }}
          >
            or continue with
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colors.neutral.border,
            }}
          />
        </View>

        {/* Social Buttons */}
        <SocialButton
          icon={<AntDesign name="google" size={20} color="#DB4437" />}
          label="Continue with Google"
        />
        <SocialButton
          icon={<AntDesign name="facebook-square" size={20} color="#1877F2" />}
          label="Continue with Facebook"
        />
        <SocialButton
          icon={<AntDesign name="apple1" size={20} color="#000000" />}
          label="Continue with Apple"
        />

        {/* Footer */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins-Regular",
              color: colors.neutral.textSecondary,
            }}
          >
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-SemiBold",
                color: colors.primary.purple,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        email={email}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}
