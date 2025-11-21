import {View, StyleSheet, StatusBar, Platform} from "react-native";
import {WebView} from 'react-native-webview';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React, {useState} from "react";

export default function AuthScreen() {
    const insets = useSafeAreaInsets();
    const [scrollEnabled, setScrollEnabled] = useState(false); // на /login скролл отключён

    return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? insets.top : 0,
                backgroundColor: '#0A0A0A',
            }}
        >
            <StatusBar barStyle="light-content" backgroundColor="#0A0A0A"/>
            <WebView
                style={styles.container}
                source={{uri: 'http://192.168.1.104:8080/login'}}
                overScrollMode="never"
                bounces={false}
                nestedScrollEnabled={false}
                showsVerticalScrollIndicator={false}
                // hideKeyboardAccessoryView={true}      // ← убирает белую полосу со стрелками на iOS
                // keyboardDisplayRequiresUserAction={false} // (опционально) нормальное поведение показа клавиатуры

                scrollEnabled={scrollEnabled}
                onNavigationStateChange={(navState) => {
                    const url = navState.url || "";
                    // на /login скролл выключен, на остальных страницах включён
                    if (url.endsWith("/login")) {
                        setScrollEnabled(false);
                    } else {
                        setScrollEnabled(true);
                    }
                }}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        backgroundColor: "black",
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        letterSpacing: -1,
        includeFontPadding: false,
        width: '100%',
        lineHeight: 48,
    },
    lastWord: {
        color: '#FF0000',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginBottom: 8,
    },
    switchModeButton: {
        marginBottom: 16,
    },
})
