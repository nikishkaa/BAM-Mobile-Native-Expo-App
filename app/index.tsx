import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, BackHandler, Platform } from "react-native";
import { WebView } from "react-native-webview";

export default function AuthScreen() {
    const webViewRef = useRef<WebView>(null);
    const [canGoBack, setCanGoBack] = useState(false);

    // ANDROID: аппаратная кнопка / жест "назад" -> история WebView
    useEffect(() => {
        if (Platform.OS !== "android") return;

        const onBackPress = () => {
            if (canGoBack && webViewRef.current) {
                webViewRef.current.goBack();
                return true; // событие обработано, из экрана не выходим
            }
            return false; // нет истории — поведение по умолчанию (закрытие/выход)
        };

        const sub = BackHandler.addEventListener("hardwareBackPress", onBackPress);
        return () => sub.remove();
    }, [canGoBack]);

    return (
        <View style={styles.root}>
            <WebView
                ref={webViewRef}
                style={styles.container}
                source={{ uri: "http://192.168.1.107:8080/home-page" }}
                overScrollMode="never"
                bounces={false}
                nestedScrollEnabled={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}

                allowsLinkPreview={false}
                onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
                // iOS: свайп вперёд/назад как в Safari
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
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
});
