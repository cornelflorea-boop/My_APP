import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLanguageStore } from "../../store/useLanguageStore";
import { getLanguageByCode } from "../../data/languages";
import { getUnitsByLanguage } from "../../data/units";
import { getLessonsByUnit } from "../../data/lessons";
import { Images } from "../../constants/images";

// ── Static display data (no tracking store yet) ─────────────────────────────
const XP_CURRENT = 15;
const XP_TOTAL = 20;
const STREAK_COUNT = 12;

const GREETINGS: Record<string, string> = {
  es: "Hola",
  fr: "Bonjour",
  de: "Hallo",
  it: "Ciao",
  pt: "Olá",
  ja: "こんにちは",
};

const LEVEL_LABELS: Record<string, string> = {
  beginner: "A1",
  elementary: "A2",
  intermediate: "B1",
  advanced: "C1",
};

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface PlanItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: IoniconName;
  iconBg: string;
  completed: boolean;
}

// ────────────────────────────────────────────────────────────────────────────
export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { user } = useUser();
  const { selectedLanguage } = useLanguageStore();

  const language = selectedLanguage ? getLanguageByCode(selectedLanguage) : null;
  const units = selectedLanguage ? getUnitsByLanguage(selectedLanguage) : [];
  const currentUnit = units[0];
  const lessons = currentUnit ? getLessonsByUnit(currentUnit.id) : [];
  const currentLesson = lessons[0];

  const greeting = selectedLanguage ? (GREETINGS[selectedLanguage] ?? "Hello") : "Hello";
  const firstName = user?.firstName ?? "Learner";
  const levelLabel = currentUnit ? (LEVEL_LABELS[currentUnit.difficulty] ?? "A1") : "A1";

  const todaysPlan: PlanItem[] = [
    {
      id: "1",
      title: "Lesson",
      subtitle: currentLesson?.title ?? "Greetings",
      iconName: "book",
      iconBg: "#6C4EF5",
      completed: true,
    },
    {
      id: "2",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      iconName: "headset",
      iconBg: "#6C4EF5",
      completed: false,
    },
    {
      id: "3",
      title: "New words",
      subtitle: `${currentLesson?.vocabulary?.length ?? 5} words`,
      iconName: "chatbubble",
      iconBg: "#EF4444",
      completed: false,
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.scrollContent,
        { paddingTop: insets.top + 8 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {language?.flag ? (
            <Image source={{ uri: language.flag }} style={styles.flagCircle} />
          ) : (
            <View style={[styles.flagCircle, { backgroundColor: "#E5E7EB" }]} />
          )}
          <Text style={styles.greetingText}>
            {greeting}, {firstName}! 👋
          </Text>
        </View>
        <View style={styles.headerRight}>
          <Image source={Images.streakFire} style={styles.streakIcon} />
          <Text style={styles.streakText}>{STREAK_COUNT}</Text>
          <View style={styles.bellButton}>
            <Ionicons name="notifications-outline" size={22} color="#0D132B" />
          </View>
        </View>
      </View>

      {/* ── Daily Goal Card ─────────────────────────────────────────────────── */}
      <View style={styles.dailyGoalCard}>
        <View style={styles.dailyGoalContent}>
          <Text style={styles.dailyGoalLabel}>Daily goal</Text>
          <View style={styles.xpRow}>
            <Text style={styles.xpCurrent}>{XP_CURRENT}</Text>
            <Text style={styles.xpTotal}> / {XP_TOTAL} XP</Text>
          </View>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${(XP_CURRENT / XP_TOTAL) * 100}%` },
              ]}
            />
          </View>
        </View>
        <Image source={Images.treasure} style={styles.treasureImage} />
      </View>

      {/* ── Continue Learning Banner ─────────────────────────────────────────── */}
      <View style={styles.continueBanner}>
        {/* Decorative background hills */}
        <View style={styles.hillLeft} />
        <View style={styles.hillCenter} />
        {/* Palace image — behind text so rendered first */}
        <Image
          source={Images.palace}
          style={styles.palaceImage}
          resizeMode="contain"
        />
        {/* Text + button — rendered on top of the palace */}
        <View style={styles.bannerContent}>
          <Text style={styles.continueLabelSmall}>Continue learning</Text>
          <Text style={styles.continueLanguage}>{language?.name ?? "Spanish"}</Text>
          <Text style={styles.continueUnit}>
            {levelLabel} · Unit {currentUnit?.order ?? 1}
          </Text>
          <View style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </View>
        </View>
      </View>

      {/* ── Today's Plan ─────────────────────────────────────────────────────── */}
      <View style={styles.planSection}>
        <View style={styles.planHeader}>
          <Text style={styles.planTitle}>Today's plan</Text>
          <View>
            <Text style={styles.viewAll}>View all</Text>
          </View>
        </View>

        <View style={styles.planList}>
          {todaysPlan.map((item, index) => (
            <View key={item.id}>
              <View style={styles.planItem}>
                <View style={[styles.planIconBox, { backgroundColor: item.iconBg }]}>
                  <Ionicons name={item.iconName} size={20} color="#FFFFFF" />
                </View>
                <View style={styles.planText}>
                  <Text style={styles.planItemTitle}>{item.title}</Text>
                  <Text style={styles.planItemSubtitle}>{item.subtitle}</Text>
                </View>
                {item.completed ? (
                  <View style={styles.checkCircleFilled}>
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                  </View>
                ) : (
                  <View style={styles.checkCircleEmpty} />
                )}
              </View>
              {index < todaysPlan.length - 1 && (
                <View style={styles.planDivider} />
              )}
            </View>
          ))}
        </View>
      </View>

      {/* ── Next Up Card ─────────────────────────────────────────────────────── */}
      <View style={styles.nextUpCard}>
        <View style={styles.nextUpContent}>
          <Text style={styles.nextUpLabel}>Next up</Text>
          <Text style={styles.nextUpTitle}>AI Video Call</Text>
          <Text style={styles.nextUpSubtitle}>Practice speaking</Text>
        </View>
        <View style={styles.cameraButton}>
          <Ionicons name="videocam" size={20} color="#FFFFFF" />
        </View>
        <Image
          source={Images.mascotWelcome}
          style={styles.tutorPhoto}
        />
      </View>
    </ScrollView>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────
const PURPLE = "#6C4EF5";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 32,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  flagCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  greetingText: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#0D132B",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  streakIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  streakText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#0D132B",
    marginRight: 4,
  },
  bellButton: {
    padding: 4,
  },

  // Daily Goal Card
  dailyGoalCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#FFF5EE",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  dailyGoalContent: {
    flex: 1,
  },
  dailyGoalLabel: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
    marginBottom: 2,
  },
  xpRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 14,
  },
  xpCurrent: {
    fontSize: 34,
    fontFamily: "Poppins-Bold",
    color: "#0D132B",
    lineHeight: 40,
  },
  xpTotal: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
  },
  progressTrack: {
    height: 7,
    backgroundColor: "#FFD5B3",
    borderRadius: 4,
    width: "85%",
  },
  progressFill: {
    height: 7,
    backgroundColor: "#FF8A00",
    borderRadius: 4,
  },
  treasureImage: {
    width: 84,
    height: 84,
    resizeMode: "contain",
    marginLeft: 8,
  },

  // Continue Learning Banner
  continueBanner: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: PURPLE,
    borderRadius: 20,
    overflow: "hidden",
    minHeight: 196,
  },
  hillLeft: {
    position: "absolute",
    bottom: -40,
    left: -50,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#5138D6",
    opacity: 0.8,
  },
  hillCenter: {
    position: "absolute",
    bottom: -55,
    left: 40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#5138D6",
    opacity: 0.55,
  },
  palaceImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 160,
    height: 196,
  },
  bannerContent: {
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 20,
    paddingRight: 170, // clear of the palace image
    justifyContent: "center",
    minHeight: 196,
  },
  continueLabelSmall: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "rgba(255,255,255,0.75)",
    marginBottom: 4,
  },
  continueLanguage: {
    fontSize: 28,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
    lineHeight: 34,
  },
  continueUnit: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "rgba(255,255,255,0.80)",
    marginBottom: 18,
    marginTop: 3,
  },
  continueButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignSelf: "flex-start",
  },
  continueButtonText: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: PURPLE,
  },

  // Today's Plan
  planSection: {
    marginHorizontal: 20,
    marginTop: 28,
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  planTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#0D132B",
  },
  viewAll: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: PURPLE,
  },
  planList: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    overflow: "hidden",
  },
  planItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
    gap: 12,
    backgroundColor: "#FFFFFF",
  },
  planIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  planText: {
    flex: 1,
  },
  planItemTitle: {
    fontSize: 15,
    fontFamily: "Poppins-SemiBold",
    color: "#0D132B",
  },
  planItemSubtitle: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
    marginTop: 1,
  },
  checkCircleFilled: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: PURPLE,
    justifyContent: "center",
    alignItems: "center",
  },
  checkCircleEmpty: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#E5E7EB",
  },
  planDivider: {
    height: 1,
    backgroundColor: "#F3F4F6",
    marginLeft: 70,
  },

  // Next Up Card
  nextUpCard: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: "#F0FFF6",
    borderRadius: 18,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 0,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    minHeight: 92,
  },
  nextUpContent: {
    flex: 1,
  },
  nextUpLabel: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
    marginBottom: 2,
  },
  nextUpTitle: {
    fontSize: 17,
    fontFamily: "Poppins-Bold",
    color: "#0D132B",
  },
  nextUpSubtitle: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
    marginTop: 2,
  },
  cameraButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#21C16B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  tutorPhoto: {
    width: 76,
    height: 110,
    borderRadius: 16,
    marginRight: -8,
  },
});
