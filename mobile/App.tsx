import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
}  from '@expo-google-fonts/roboto';

import { BaiJamjuree_700Bold }  from '@expo-google-fonts/bai-jamjuree';

export default function App() {
  
  const [hasLoadFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if(!hasLoadFonts) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-950 ">
      <Text className="font-alt text-5xl text-gray-50" >Testando!</Text>
      <StatusBar style="light" />
    </View>
  );
}
