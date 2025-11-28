import {View, StyleSheet} from "react-native";
import {WebView} from 'react-native-webview';
import React, {useState} from "react";

export default function AuthScreen() {
    const [scrollEnabled, setScrollEnabled] = useState(false);

    return (
        <View style={styles.root}>
            <WebView
                style={styles.container}
                source={{uri: 'http://192.168.1.107:8080/home-page'}}
                overScrollMode="never"
                bounces={false}
                nestedScrollEnabled={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#0A0A0A', // важно и для iOS
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});