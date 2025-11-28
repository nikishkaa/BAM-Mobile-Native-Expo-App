import { Stack } from "expo-router";
import { Platform } from "react-native";
import {  useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    useEffect(() => {
        // ANDROID: прячем нижнюю навигацию, как делали раньше
        if (Platform.OS === "android") {
            NavigationBar.setVisibilityAsync("hidden");
            NavigationBar.setBehaviorAsync("inset-swipe");
        }
    }, []);

    return (
        <>
            {/* iOS: статусбар виден, текст светлый поверх тёмного фона */}
            {Platform.OS === "ios" && (
                <StatusBar style="light" hidden={false} translucent />
            )}

            {/* ANDROID: полноэкранный режим */}
            {Platform.OS === "android" && (
                <StatusBar hidden />
            )}

            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: "#0A0A0A",
                    },
                }}
            />
        </>
    );
}