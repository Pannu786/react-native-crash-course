import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='font-pblack tex-4xl'>Aora!! Pannu Index Page </Text>
      <StatusBar style='auto' />
      <Link href={'/home'} className='text-yellow-500 font-extrabold'>
        Go To Home
      </Link>
    </View> 
  );
}
