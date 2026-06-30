import React, { useRef, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PURPLE = "#6C4EF5";
const INACTIVE_COLOR = "#9CA3AF";
const CIRCLE_SIZE = 48;
const ICON_SIZE = 22;
const TAB_BAR_HEIGHT = 76;
const CIRCLE_TOP = 8;
// Icon is centered inside circle:
const ICON_MARGIN_TOP = CIRCLE_TOP + (CIRCLE_SIZE - ICON_SIZE) / 2;

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const TAB_CONFIG: Record<
  string,
  { icon: IoniconName; iconOutline: IoniconName; label: string }
> = {
  home: { icon: "home", iconOutline: "home-outline", label: "Home" },
  learn: { icon: "book", iconOutline: "book-outline", label: "Learn" },
  "ai-teacher": {
    icon: "sparkles",
    iconOutline: "sparkles-outline",
    label: "AI Teacher",
  },
  chat: {
    icon: "chatbubble",
    iconOutline: "chatbubble-outline",
    label: "Chat",
  },
  profile: { icon: "person", iconOutline: "person-outline", label: "Profile" },
};

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [containerWidth, setContainerWidth] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const tabWidth = containerWidth / state.routes.length;

  useEffect(() => {
    if (containerWidth === 0) return;
    Animated.spring(translateX, {
      toValue: state.index * tabWidth,
      useNativeDriver: true,
      tension: 68,
      friction: 11,
    }).start();
  }, [state.index, tabWidth, containerWidth]);

  const onLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    setContainerWidth(width);
    translateX.setValue(state.index * (width / state.routes.length));
  };

  const circleLeft = tabWidth / 2 - CIRCLE_SIZE / 2;

  return (
    <View
      onLayout={onLayout}
      style={[
        styles.container,
        { height: TAB_BAR_HEIGHT + insets.bottom, paddingBottom: insets.bottom },
      ]}
    >
      {/* Animated circle — slides behind the active tab icon */}
      {containerWidth > 0 && (
        <Animated.View
          style={[
            styles.circle,
            {
              left: circleLeft,
              top: CIRCLE_TOP,
              transform: [{ translateX }],
            },
          ]}
        />
      )}

      {state.routes.map((route, index) => {
        const isActive = state.index === index;
        const config = TAB_CONFIG[route.name];
        if (!config) return null;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isActive && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            style={styles.tabItem}
            activeOpacity={0.75}
          >
            {/* Icon — always at the same Y position */}
            <View style={[styles.iconWrapper, { marginTop: ICON_MARGIN_TOP }]}>
              <Ionicons
                name={isActive ? config.icon : config.iconOutline}
                size={ICON_SIZE}
                color={isActive ? "#FFFFFF" : INACTIVE_COLOR}
              />
            </View>
            {/* Label — rendered for all tabs; invisible when active to preserve height */}
            <Text
              style={[styles.label, { opacity: isActive ? 0 : 1 }]}
              numberOfLines={1}
            >
              {config.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  circle: {
    position: "absolute",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: PURPLE,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  iconWrapper: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 11,
    fontFamily: "Poppins-Regular",
    color: INACTIVE_COLOR,
    marginTop: 4,
  },
});
