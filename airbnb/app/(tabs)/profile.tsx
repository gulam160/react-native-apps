import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";
import SafeViewAndroid from "@/Styles/SafeViewAndroid";
import { defaultStyle } from "@/Styles/defaultStyle";
import * as ImagePicker from "expo-image-picker";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.emailAddresses);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!user) return;

    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.emailAddresses);
  }, []);

  const onSaveUser = async () => {
    try {
      if (firstName && lastName) {
        await user?.update({ firstName, lastName });
      } else return;
    } catch (error) {
      console.error((error as Error).message);
    }
    setEdit(false);
  };

  const onCaptureImage = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.75,
      base64: true,
    });

    if (!image.canceled) {
      const base64 = `data:image/png;base64,${image.assets[0].base64}`;

      user?.setProfileImage({ file: base64 });
    }
  };

  return (
    <SafeAreaView style={[tw``, SafeViewAndroid.AndroidSafeArea]}>
      <View style={tw`flex-row p-6 justify-between items-center`}>
        <Text style={[tw`text-xl`, { fontFamily: "mon-b" }]}>Profile</Text>
        <Ionicons name="notifications-outline" size={26} />
      </View>

      {user && (
        <View
          style={[
            tw`bg-white p-6 mx-6 my-6 rounded-md shadow-md items-center`,
            { gap: 14 },
          ]}
        >
          <TouchableOpacity onPress={onCaptureImage}>
            <Image
              source={{
                uri: user.imageUrl,
              }}
              style={tw`w-24 h-24 rounded-full`}
            />
          </TouchableOpacity>
          <View style={[tw`flex-row`, { gap: 6 }]}>
            {edit ? (
              <View
                style={[
                  tw`flex-1 flex-row items-center justify-center`,
                  { gap: 8 },
                ]}
              >
                <TextInput
                  placeholder="First name"
                  value={firstName || ""}
                  onChangeText={setFirstName}
                  style={[defaultStyle.inputField, { width: 100 }]}
                />
                <TextInput
                  placeholder="Last name"
                  value={lastName || ""}
                  onChangeText={setLastName}
                  style={[defaultStyle.inputField, { width: 100 }]}
                />
                <TouchableOpacity onPress={onSaveUser}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={26}
                    color={"#228B22"}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={[
                  tw`flex-1 flex-row items-center justify-center`,
                  { gap: 8 },
                ]}
              >
                <Text style={[tw`text-lg`, { fontFamily: "mon-b" }]}>
                  {user.firstName} {user.lastName}
                </Text>
                <TouchableOpacity onPress={() => setEdit(true)}>
                  <Ionicons name="create-outline" size={24} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <Text style={{ fontFamily: "mon" }}>{email?.toLocaleString()}</Text>
          <Text style={{ fontFamily: "mon" }}>
            Since {user?.createdAt?.toLocaleDateString()}
          </Text>
        </View>
      )}

      {isSignedIn && (
        <TouchableOpacity
          style={[tw`mx-6 my-6`, defaultStyle.btn]}
          onPress={() => signOut()}
        >
          <Text style={defaultStyle.btnText}>Log out</Text>
        </TouchableOpacity>
      )}

      {!isSignedIn && (
        <Link href={"/(modals)/login"} asChild>
          <TouchableOpacity
            style={{ ...defaultStyle.btn, margin: 24 }}
            onPress={() => signOut()}
          >
            <Text style={defaultStyle.btnText}>Log in</Text>
          </TouchableOpacity>
        </Link>
      )}
    </SafeAreaView>
  );
};

export default Page;
