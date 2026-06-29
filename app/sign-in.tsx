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
import { useSSO, useAuth } from "@clerk/expo";
import { useSignIn } from "@clerk/expo/legacy";
import { Redirect } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { colors } from "../theme";
import VerificationModal from "../components/VerificationModal";

WebBrowser.maybeCompleteAuthSession();

function SocialButton({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
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
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [verifyError, setVerifyError] = useState("");

  if (isSignedIn) return <Redirect href="/" />;

  const handleSignIn = async () => {
    if (!isLoaded || !signIn) return;
    setError("");
    setIsLoading(true);
    try {
      const response = await signIn.create({ identifier: email });
      const emailFactor = response.supportedFirstFactors?.find(
        (f) => f.strategy === "email_code"
      );
      if (emailFactor && "emailAddressId" in emailFactor) {
        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId: (emailFactor as { emailAddressId: string })
            .emailAddressId,
        });
        setModalVisible(true);
      } else {
        setError(
          "Email code sign-in is not enabled for this account."
        );
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message ?? "Sign in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async (code: string) => {
    if (!isLoaded || !signIn) return;
    setVerifyError("");
    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      setVerifyError(
        err.errors?.[0]?.message ?? "Invalid code. Please try again."
      );
    }
  };

  const handleResend = async () => {
    if (!isLoaded || !signIn) return;
    try {
      const emailFactor = signIn.supportedFirstFactors?.find(
        (f) => f.strategy === "email_code"
      );
      if (emailFactor && "emailAddressId" in emailFactor) {
        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId: (emailFactor as { emailAddressId: string })
            .emailAddressId,
        });
      }
    } catch (err: any) {
      setVerifyError(err.errors?.[0]?.message ?? "Failed to resend code.");
    }
  };

  const handleSSOAuth = async (
    strategy: "oauth_google" | "oauth_apple" | "oauth_facebook"
  ) => {
    try {
      const { createdSessionId, setActive: setActiveSSO } = await startSSOFlow(
        {
          strategy,
          redirectUrl: Linking.createURL("/"),
        }
      );
      if (createdSessionId) {
        await setActiveSSO!({ session: createdSessionId });
      }
    } catch (err: any) {
      console.error("SSO error:", err);
      setError(err.errors?.[0]?.message ?? err.message ?? "Social sign in failed.");
    }
  };

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

        {/* Error message */}
        {error ? (
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Poppins-Regular",
              color: colors.semantic.error,
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            {error}
          </Text>
        ) : null}

        {/* Sign In Button */}
        <TouchableOpacity
          onPress={handleSignIn}
          disabled={!email || isLoading}
          style={{
            backgroundColor: colors.primary.purple,
            borderRadius: 20,
            paddingVertical: 18,
            alignItems: "center",
            marginBottom: 24,
            opacity: !email || isLoading ? 0.6 : 1,
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
          onPress={() => handleSSOAuth("oauth_google")}
        />
        <SocialButton
          icon={<Ionicons name="logo-facebook" size={20} color="#1877F2" />}
          label="Continue with Facebook"
          onPress={() => handleSSOAuth("oauth_facebook")}
        />
        <SocialButton
          icon={<Ionicons name="logo-apple" size={20} color="#000000" />}
          label="Continue with Apple"
          onPress={() => handleSSOAuth("oauth_apple")}
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
        onClose={() => {
          setModalVisible(false);
          setVerifyError("");
        }}
        onVerify={handleVerify}
        onResend={handleResend}
        error={verifyError}
      />
    </SafeAreaView>
  );
}
