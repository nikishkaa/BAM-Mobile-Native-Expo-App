import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
    return (
        <>
            {/* Прячем статусбар, как ты делал в экране */}
            <StatusBar hidden />

            <Stack
                screenOptions={{
                    headerShown: false,
                    // ВАЖНО: общий фон для всего контента (включая safe-area)
                    contentStyle: {
                        backgroundColor: "#0A0A0A",
                    },
                }}
            />
        </>
    );
}