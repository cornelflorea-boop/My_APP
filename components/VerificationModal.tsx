import React, { useRef, useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { colors } from "../theme";

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
  onVerify: (code: string) => Promise<void>;
  onResend: () => Promise<void>;
  error?: string;
  isLoading?: boolean;
}

export default function VerificationModal({
  visible,
  email,
  onClose,
  onVerify,
  onResend,
  error,
  isLoading = false,
}: Props) {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (visible) {
      setCode(["", "", "", "", "", ""]);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 350);
    }
  }, [visible]);

  const handleDigitChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newCode.every((d) => d !== "")) {
      onVerify(newCode.join(""));
    }
  };

  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleClose = () => {
    setCode(["", "", "", "", "", ""]);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={{ flex: 1 }}>
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
          onPress={handleClose}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              backgroundColor: colors.neutral.background,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingHorizontal: 28,
              paddingTop: 16,
              paddingBottom: Platform.OS === "ios" ? 48 : 32,
            }}
          >
            {/* Handle bar */}
            <View
              style={{
                width: 40,
                height: 4,
                backgroundColor: colors.neutral.border,
                borderRadius: 2,
                alignSelf: "center",
                marginBottom: 28,
              }}
            />

            {/* Title */}
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Poppins-Bold",
                color: colors.neutral.textPrimary,
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              Check your email
            </Text>

            {/* Subtitle */}
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins-Regular",
                color: colors.neutral.textSecondary,
                textAlign: "center",
                lineHeight: 22,
                marginBottom: 32,
              }}
            >
              We sent a 6-digit code to{"\n"}
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  color: colors.neutral.textPrimary,
                }}
              >
                {email || "your email"}
              </Text>
            </Text>

            {/* OTP Inputs */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: error ? 12 : 32,
              }}
            >
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <TextInput
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  value={code[i]}
                  onChangeText={(text) => handleDigitChange(text, i)}
                  onKeyPress={(e) => handleKeyPress(e, i)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                  editable={!isLoading}
                  style={{
                    width: 46,
                    height: 56,
                    borderRadius: 12,
                    borderWidth: 1.5,
                    borderColor: code[i]
                      ? colors.primary.purple
                      : colors.neutral.border,
                    backgroundColor: code[i]
                      ? "#F0ECFF"
                      : colors.neutral.background,
                    textAlign: "center",
                    fontSize: 22,
                    fontFamily: "Poppins-Bold",
                    color: colors.neutral.textPrimary,
                    opacity: isLoading ? 0.5 : 1,
                  }}
                />
              ))}
            </View>

            {/* Error message */}
            {error ? (
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Poppins-Regular",
                  color: colors.semantic.error,
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {error}
              </Text>
            ) : null}

            {/* Loading indicator */}
            {isLoading ? (
              <ActivityIndicator
                color={colors.primary.purple}
                style={{ marginBottom: 16 }}
              />
            ) : null}

            {/* Resend */}
            <TouchableOpacity onPress={onResend} disabled={isLoading}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: colors.neutral.textSecondary,
                  textAlign: "center",
                }}
              >
                Didn't receive it?{" "}
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    color: colors.primary.purple,
                  }}
                >
                  Resend
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
