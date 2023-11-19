import { defaultStyle } from "@/Styles/defaultStyle";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";

const LoginForm = () => {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });
      await setActive({ session: completeSignIn.createdSessionId });
      router.back();
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Animated.View entering={FadeInRight} exiting={FadeInLeft}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={[defaultStyle.inputField, { marginVertical: 30 }]}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={[defaultStyle.inputField, { marginBottom: 30 }]}
      />

      <TouchableOpacity style={defaultStyle.btn} onPress={onSignInPress}>
        <Text style={defaultStyle.btnText}>Login</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default LoginForm;
