import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { getLessonById } from "../../data/lessons";
import { Images } from "../../constants/images";
import { fmtTime } from "../../utils/learnHelpers";
import { CtrlBtn } from "../../components/lesson/CtrlBtn";

const { height: SCREEN_H } = Dimensions.get("window");
const TEACHER_H = Math.min(Math.max(Math.round(SCREEN_H * 0.38), 230), 340);

const PURPLE = "#6C4EF5";
const GREEN = "#21C16B";
const BLUE = "#4D8BFF";

// ── Screen ────────────────────────────────────────────────────────────────
export default function AudioLessonScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();
  const lessonId = Array.isArray(params.id) ? params.id[0] : params.id;
  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);

  const phrases = lesson
    ? [
        lesson.aiTeacherPrompt.introduction,
        ...lesson.phrases.map((p) => `${p.phrase}\n${p.translation}`),
      ]
    : ["Hello! Let's start your lesson."];

  useEffect(() => {
    const timer = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!lesson) {
    return (
      <View style={[styles.screen, { paddingTop: insets.top }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtnFallback}>
          <Ionicons name="chevron-back" size={24} color="#0D132B" />
        </TouchableOpacity>
        <Text style={styles.notFoundText}>Lesson not found.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* ── Header ────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color="#0D132B" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.hdrIconBtn}>
            <Ionicons name="videocam-outline" size={18} color="#0D132B" />
          </TouchableOpacity>
          <View style={styles.timerPill}>
            <Text style={styles.timerText}>{fmtTime(elapsed)}</Text>
          </View>
          <TouchableOpacity style={styles.hdrIconBtn}>
            <Ionicons name="notifications-outline" size={18} color="#0D132B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Teacher area ──────────────────────────────────────────────── */}
      <View style={[styles.teacherArea, { height: TEACHER_H }]}>

        {/* Mascot (centered) */}
        <View style={styles.mascotWrap}>
          <Image
            source={Images.mascotWelcome}
            style={styles.mascotImg}
            resizeMode="contain"
          />
        </View>

        {/* Speech bubble – bottom */}
        <TouchableOpacity
          style={styles.bubbleWrap}
          onPress={() => setPhraseIdx((i) => (i + 1) % phrases.length)}
          activeOpacity={0.88}
        >
          <View style={styles.bubble}>
            <Text style={styles.bubbleText} numberOfLines={3}>
              {phrases[phraseIdx]}
            </Text>
            <View style={styles.audioIconWrap}>
              <Ionicons name="volume-medium" size={18} color={PURPLE} />
            </View>
          </View>
          {/* Bubble tail */}
          <View style={styles.bubbleTail} />
        </TouchableOpacity>
      </View>

      {/* ── Control buttons ───────────────────────────────────────────── */}
      <View style={styles.controlsCard}>
        <CtrlBtn
          icon={
            <Ionicons
              name={cameraOn ? "videocam" : "videocam-outline"}
              size={22}
              color="#0D132B"
            />
          }
          label="Camera"
          onPress={() => setCameraOn(!cameraOn)}
          active={cameraOn}
        />
        <CtrlBtn
          icon={
            <Ionicons
              name={micOn ? "mic" : "mic-off"}
              size={22}
              color="#0D132B"
            />
          }
          label="Mic"
          onPress={() => setMicOn(!micOn)}
          active={micOn}
        />
        <CtrlBtn
          icon={
            <MaterialCommunityIcons
              name="translate"
              size={22}
              color={subtitlesOn ? PURPLE : "#0D132B"}
            />
          }
          label="Subtitles"
          onPress={() => setSubtitlesOn(!subtitlesOn)}
          active={subtitlesOn}
        />
        <CtrlBtn
          icon={
            <MaterialCommunityIcons name="phone-hangup" size={22} color="#FFFFFF" />
          }
          label="End Call"
          onPress={() => router.back()}
          isEndCall
        />
      </View>

      {/* ── Feedback card ─────────────────────────────────────────────── */}
      <View style={styles.feedbackCard}>
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Speaking</Text>
          <Text style={[styles.feedbackScore, { color: GREEN }]}>Excellent</Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Pronunciation</Text>
          <Text style={[styles.feedbackScore, { color: BLUE }]}>Great</Text>
        </View>
        <View style={styles.feedbackDivider} />
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackLabel}>Grammar</Text>
          <Text style={[styles.feedbackScore, { color: PURPLE }]}>Good</Text>
        </View>
      </View>

      <View style={{ height: insets.bottom + 12 }} />
    </View>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  backBtnFallback: {
    padding: 16,
  },
  notFoundText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#0D132B",
    textAlign: "center",
    marginTop: 40,
  },

  // ── Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  headerCenter: {
    flex: 1,
    marginLeft: 6,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#0D132B",
  },
  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 1,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: GREEN,
  },
  onlineText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: GREEN,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  hdrIconBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  timerPill: {
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 17,
    paddingHorizontal: 10,
    paddingVertical: 7,
    minWidth: 38,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  timerText: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#0D132B",
  },

  // ── Teacher area
  teacherArea: {
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  mascotWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 68,
    alignItems: "center",
  },
  mascotImg: {
    width: 210,
    height: 245,
  },
  bubbleWrap: {
    position: "absolute",
    bottom: 14,
    left: 14,
    right: 14,
  },
  bubble: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 4,
  },
  bubbleText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#0D132B",
    lineHeight: 21,
  },
  audioIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#EEE9FF",
    justifyContent: "center",
    alignItems: "center",
  },
  bubbleTail: {
    position: "absolute",
    bottom: -10,
    left: 28,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 11,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#FFFFFF",
  },

  // ── Controls card
  controlsCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 8,
  },
  // ── Feedback card
  feedbackCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  feedbackItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  feedbackLabel: {
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    color: "#0D132B",
  },
  feedbackScore: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
  feedbackDivider: {
    width: 1,
    height: 36,
    backgroundColor: "#E5E7EB",
  },
});
