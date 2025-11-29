// app/index.tsx
import React, { useRef, useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Platform,
    BackHandler,
    StatusBar,
} from "react-native";
import { WebView } from "react-native-webview";
import * as NavigationBar from "expo-navigation-bar";

export default function IndexScreen() {
    const webViewRef = useRef<WebView>(null);
    const [canGoBack, setCanGoBack] = useState(false);

    // ANDROID: скрыть нижние системные кнопки
    useEffect(() => {
        if (Platform.OS !== "android") return;

        NavigationBar.setVisibilityAsync("hidden");
        NavigationBar.setBehaviorAsync("overlay-swipe");
    }, []);

    // ANDROID: аппаратная кнопка "назад" -> история WebView
    useEffect(() => {
        if (Platform.OS !== "android") return;

        const sub = BackHandler.addEventListener(
            "hardwareBackPress",
            () => {
                if (canGoBack && webViewRef.current) {
                    webViewRef.current.goBack();
                    return true;
                }
                return false;
            }
        );

        return () => sub.remove();
    }, [canGoBack]);

    return (
        <View style={styles.root}>
            {/* iOS: статус-бар виден; Android: скрыт */}
            <StatusBar
                barStyle="light-content"
                hidden={Platform.OS === "android"}
            />

            <WebView
                ref={webViewRef}
                style={styles.webview}
                source={{ uri: "http://192.168.1.107:8080/home-page" }}
                overScrollMode="never"
                bounces={false}
                nestedScrollEnabled={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                allowsLinkPreview={false}
                onNavigationStateChange={(navState) =>
                    setCanGoBack(navState.canGoBack)
                }
                allowsBackForwardNavigationGestures={Platform.OS === "ios"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#0A0A0A",
    },
    webview: {
        flex: 1,
        backgroundColor: "transparent",
    },
});
