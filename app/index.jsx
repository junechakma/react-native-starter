import { router, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomeButton';

const buttonStyle = {
    width: "100%",   
    marginTop: 28 
}


export default function App() {
    return (
        <SafeAreaView className="w-full  ">
            <StatusBar style="light" backgroundColor='#161622' />
           
            <ScrollView contentContainerStyle={{ height: "100%" }} className="bg-primary">
                <View className="w-full items-center justify-center h-full px-4 ">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode='contain'
                    />

                    <View className="relative mt-5">
                        <Text className="text-4xl text-white font-bold text-center">Discover Endless Posibilities with  {``}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode='contain'
                        />
                    </View>
                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Where creativity meets innovation : embark on a journey of limitless exploration with Aora
                    </Text>


                    <CustomButton title="Continue with email"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles={buttonStyle}   
                        textStyles="font-semibold text-lg"  
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


