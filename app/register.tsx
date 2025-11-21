import { View, StyleSheet, StatusBar} from "react-native";
import { WebView } from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AuthScreen() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: 'black' }}>
            <StatusBar barStyle="light-content" />
            <WebView
                style={styles.container}
                source={{ uri: 'http://192.168.1.104:8080/login\n' }}
            />
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0a0a0a",
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
