import '@/global.css'
import { SafeAreaView as RNsafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const SafeAreaView = styled(RNsafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-3xl font-bold text-red-500">
        NativeWind v5
      </Text>

      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">
        Go to Onboarding
      </Link>

      <Link href="/(auth)/signIn" className="mt-4 rounded bg-primary text-white p-4">
        Go to Sign in
      </Link>

      <Link href="/(auth)/signUp" className="mt-4 rounded bg-primary text-white p-4">
        Go to Sign up
      </Link>

      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "Spotify" }
      }}>
        Go to spotify
      </Link>

    </SafeAreaView>
  );
}