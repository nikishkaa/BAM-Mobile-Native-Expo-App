import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";

function RouteGuard({children}: { children: React.ReactNode }) {
    const router = useRouter();
    const segments = useSegments();
    const isAuth = false;
    const [isRouterReady, setIsRouterReady] = useState(false);

    useEffect(() => {
        setIsRouterReady(true);
    }, []);

    useEffect(() => {
        if (!isRouterReady) return;

        const inAuthGroup = segments[0] === 'register';

        if (!isAuth && !inAuthGroup) {
            router.replace("/register");
        }
    }, [isAuth, segments, router, isRouterReady]);

    if (!isAuth && segments.length > 0 && segments[0] !== 'register') {
        return null;
    }

    return <>{children}</>;
}

export default function RootLayout() {
    return (
        <RouteGuard>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="register" options={{headerShown: false}}/>
            </Stack>
        </RouteGuard>
    );
}
