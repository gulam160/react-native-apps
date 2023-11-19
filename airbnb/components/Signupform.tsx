import { defaultStyle } from "@/Styles/defaultStyle";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import { useToast } from "react-native-toast-notifications";

const Signupform = () => {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const toast = useToast();

  const onSignUpPress = async () => {
    if (!isLoaded) return;
    const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    try {
      if (validateEmail.test(email)) {
        await signUp.create({
          emailAddress: email,
          password,
        });
      } else {
        toast.show("Not a valid email", {
          type: "warning",
          placement: "top",
          duration: 4000,
          animationType: "zoom-in",
        });
      }
      // send the email.
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      await setActive({ session: completeSignUp.createdSessionId });
      router.back();
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {!pendingVerification && (
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
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={[defaultStyle.inputField, { marginBottom: 30 }]}
          />
          <TouchableOpacity style={defaultStyle.btn} onPress={onSignUpPress}>
            <Text style={defaultStyle.btnText}>Sign up</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {pendingVerification && (
        <Animated.View entering={FadeInRight} exiting={FadeInLeft}>
          <TextInput
            placeholder="Enter code"
            value={code}
            onChangeText={(code) => setCode(code)}
            style={[defaultStyle.inputField, { marginVertical: 30 }]}
          />
          <TouchableOpacity style={defaultStyle.btn} onPress={onPressVerify}>
            <Text style={defaultStyle.btnText}>Verify Email</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </>
  );
};

export default Signupform;
