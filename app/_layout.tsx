import React from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { WebView } from "react-native-webview";

export default function AuthScreen() {
    return (
        <View style={styles.root}>
            <StatusBar hidden />

            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={0} // если появится кастомный header — подстроишь
            >
                <WebView
                    style={styles.container}
                    source={{ uri: "http://192.168.1.107:8080/home-page" }}
                    overScrollMode="never"
                    bounces={false}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#0A0A0A",
    },
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
});