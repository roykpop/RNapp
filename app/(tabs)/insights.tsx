import '@/global.css'
import { SafeAreaView as RNsafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const SafeAreaView = styled(RNsafeAreaView);

const insights = () => {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>insights</Text>
    </SafeAreaView>
  )
}

export default insights

