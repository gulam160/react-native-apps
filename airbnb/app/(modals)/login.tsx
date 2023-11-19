import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import tw from "tailwind-react-native-classnames";
import { defaultStyle } from "@/Styles/defaultStyle";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import Signupform from "@/components/Signupform";
import LoginForm from "@/components/LoginForm";
import Animated from "react-native-reanimated";

enum Strategy {
  Google = "oauth_google",
  Apple = "oauth_apple",
  Facebook = "oauth_facebook",
}

const Page = () => {
  useWarmUpBrowser();
  const [toggleForm, setToggleForm] = useState<"Signup" | "Login">("Signup");
  const router = useRouter();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const handleToggle = () => {
    toggleForm === "Signup" ? setToggleForm("Login") : setToggleForm("Signup");
  };

  return (
    <View style={tw`flex-1 bg-white p-6`}>
      {toggleForm === "Login" ? <LoginForm /> : <Signupform />}
      <Animated.View
        style={[tw`flex-row items-center justify-center mt-6`, { gap: 3 }]}
      >
        <Text style={{ fontFamily: "mon-sb", color: Colors.grey }}>
          {toggleForm === "Login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </Text>
        <TouchableOpacity onPress={handleToggle}>
          <Text style={{ fontFamily: "mon-b", color: Colors.primary }}>
            {toggleForm === "Login" ? "Sign Up" : "Login"}
          </Text>
        </TouchableOpacity>
      </Animated.View>
      {/* Separator with __OR__ */}
      <View style={[tw`flex-row items-center my-7`, { gap: 10 }]}>
        <View
          style={[
            tw`flex-1 border-b border-black`,
            {
              borderBottomWidth: StyleSheet.hairlineWidth,
            },
          ]}
        />
        <Text style={{ fontFamily: "mon-sb", color: Colors.grey }}>OR</Text>
        <View
          style={[
            tw`flex-1 border-b border-black`,
            {
              borderBottomWidth: StyleSheet.hairlineWidth,
            },
          ]}
        />
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity style={style.btnOutline}>
          <Ionicons
            name="call-outline"
            size={24}
            style={defaultStyle.btnIcon}
          />
          <Text style={style.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnOutline}
          onPress={() => onSelectAuth(Strategy.Google)}
        >
          <Ionicons
            name="md-logo-google"
            size={24}
            style={defaultStyle.btnIcon}
          />
          <Text style={style.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnOutline}
          onPress={() => onSelectAuth(Strategy.Apple)}
        >
          <Ionicons
            name="md-logo-apple"
            size={24}
            style={defaultStyle.btnIcon}
          />
          <Text style={style.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnOutline}
          onPress={() => onSelectAuth(Strategy.Facebook)}
        >
          <Ionicons
            name="md-logo-facebook"
            size={24}
            style={defaultStyle.btnIcon}
          />
          <Text style={style.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

const style = StyleSheet.create({
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "mon-sb",
  },
});
