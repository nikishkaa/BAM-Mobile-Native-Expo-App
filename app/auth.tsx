import {KeyboardAvoidingView, Platform, View, StyleSheet} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";

export default function AuthScreen() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                              style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title} variant={"headlineLarge"}>Create Account</Text>
                <TextInput label="Username"
                           autoCapitalize="none"
                           keyboardType="default"
                           mode="outlined"
                           style={styles.input}/>n


                <TextInput label="Phone Number"
                           autoCapitalize="none"
                           keyboardType="numeric"
                           placeholder="+375 XX XXX XX XX"
                           mode="outlined"
                           style={styles.input}/>


                <TextInput label="Password"
                           autoCapitalize="none"
                           keyboardType="default"
                           mode="outlined"
                           style={styles.input}/>

                <Button mode="contained" style={styles.button}>Sign Up</Button>
                <Button mode="text" style={styles.switchModeButton}>Already have an account? Sign in</Button>

            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        marginBottom: 24,
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