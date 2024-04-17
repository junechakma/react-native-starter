import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View className="bg-slate-500 flex-1  items-center justify-center">
            <Text>Aora2</Text>
            <StatusBar style="auto" />
            <Link href="/profile"> Profile</Link>
        </View>
    );
}


