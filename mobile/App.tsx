import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-950">
      <Text>Hello Word - testando </Text>
      <StatusBar style="auto" />
    </View>
  );
}

