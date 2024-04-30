import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <Text className='text-pink-500 tex-4xl'>Aora!! Pannu Index Page </Text>
      <StatusBar style='auto' />
      <Link href={'/profile'} className='text-yellow-500 font-extrabold'>
        Click for Link
      </Link>
    </View>
  );
}
