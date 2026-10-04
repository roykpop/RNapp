import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'Sans-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'Sans-Bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'Sans-Extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'Sans-Medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Sans-SemiBold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'Sans-Light': require('../assets/fonts/PlusJakartaSans-Light.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{ headerShown: false }}
    />
  );
}