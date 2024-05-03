import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      <ScrollView >
        <View className="w-[90vw] self-center  justify-center ">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white mt-10 font-psemibold mb-10">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleTextChange={(e) => setForm({
              ...form, email: e
            })}
            otherStyles = "mt-7"
            keyboardType = "email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleTextChange={(e) => setForm({
              ...form, password: e
            })}
            otherStyles = "mt-7"
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn