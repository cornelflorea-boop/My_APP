import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";
import { LANGUAGES } from "../data/languages";
import { useLanguageStore } from "../store/useLanguageStore";

const LEARNER_COUNTS: Record<string, string> = {
  es: "28.4M learners",
  fr: "19.4M learners",
  de: "8.1M learners",
  it: "5.2M learners",
  pt: "11.3M learners",
  ja: "12.7M learners",
};

export default function LanguageSelection() {
  const router = useRouter();
  const { setLanguage } = useLanguageStore();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.neutral.background} />

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 16,
        }}
      >
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 4 }}>
          <Ionicons name="chevron-back" size={24} color={colors.neutral.textPrimary} />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontFamily: "Poppins-SemiBold",
            color: colors.neutral.textPrimary,
            marginRight: 32,
          }}
        >
          Choose a language
        </Text>
      </View>

      {/* Search bar */}
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 24,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.neutral.surface,
          borderRadius: 50,
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <Ionicons
          name="search"
          size={18}
          color={colors.neutral.textSecondary}
          style={{ marginRight: 10 }}
        />
        <TextInput
          placeholder="Search languages"
          placeholderTextColor={colors.neutral.textSecondary}
          value={search}
          onChangeText={setSearch}
          style={{
            flex: 1,
            fontSize: 15,
            fontFamily: "Poppins-Regular",
            color: colors.neutral.textPrimary,
          }}
        />
      </View>

      {/* Language list */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Poppins-Bold",
            color: colors.neutral.textPrimary,
            marginBottom: 12,
          }}
        >
          Popular
        </Text>

        {filtered.map((lang) => {
          const isSelected = selected === lang.code;
          return (
            <TouchableOpacity
              key={lang.code}
              onPress={() => setSelected(lang.code)}
              activeOpacity={0.85}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 14,
                paddingHorizontal: 16,
                marginBottom: 6,
                borderRadius: 16,
                borderWidth: 1.5,
                borderColor: isSelected ? colors.primary.purple : "transparent",
                backgroundColor: isSelected ? "#F0EEFF" : colors.neutral.background,
              }}
            >
              {/* Flag */}
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  overflow: "hidden",
                  marginRight: 14,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.neutral.surface,
                }}
              >
                {lang.flag.startsWith("http") ? (
                  <Image
                    source={{ uri: lang.flag }}
                    style={{ width: 44, height: 44 }}
                    resizeMode="cover"
                  />
                ) : (
                  <Text style={{ fontSize: 24 }}>{lang.flag}</Text>
                )}
              </View>

              {/* Name & learner count */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Poppins-SemiBold",
                    color: colors.neutral.textPrimary,
                  }}
                >
                  {lang.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Poppins-Regular",
                    color: colors.neutral.textSecondary,
                    marginTop: 1,
                  }}
                >
                  {LEARNER_COUNTS[lang.code] ?? ""}
                </Text>
              </View>

              {/* Trailing icon */}
              {isSelected ? (
                <View
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    backgroundColor: colors.primary.purple,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                </View>
              ) : (
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={colors.neutral.textSecondary}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Confirm button */}
      <View style={{ paddingHorizontal: 20, paddingTop: 12 }}>
        <TouchableOpacity
          onPress={() => {
            if (selected) {
              setLanguage(selected);
              router.replace("/");
            }
          }}
          activeOpacity={selected ? 0.85 : 1}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: selected ? colors.primary.purple : colors.neutral.border,
            borderRadius: 20,
            paddingVertical: 18,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-SemiBold",
              color: selected ? "#FFFFFF" : colors.neutral.textSecondary,
            }}
          >
            Confirm selection
          </Text>
        </TouchableOpacity>
      </View>

      {/* Earth image */}
      <Image
        source={require("../assets/images/earth.png")}
        style={{ width: "100%", height: 160, marginTop: 8 }}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
}
