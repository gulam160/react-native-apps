import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight as number) + 10 : 0,
  },
});
