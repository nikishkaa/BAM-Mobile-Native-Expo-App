import {View, StyleSheet, StatusBar} from "react-native";
import {WebView} from 'react-native-webview';
import React, {useState} from "react";

export default function AuthScreen() {
    const [scrollEnabled, setScrollEnabled] = useState(false);

    return (
        <View style={styles.root}>
            <StatusBar hidden />

            <WebView
                style={styles.container}
                source={{uri: 'http://192.168.1.107:8080/home-page'}}
                overScrollMode="never"
                bounces={false}
                nestedScrollEnabled={false}
                showsVerticalScrollIndicator={false}

                scrollEnabled={true}
                // onNavigationStateChange={(navState) => {
                //     const url = navState.url || "";
                //
                //     const isAuthScreen = /\/(login|register)(\?|$)/.test(url);
                //
                //     setScrollEnabled(!isAuthScreen);
                // }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#0A0A0A',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});
