import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignInForm from "./src/components/SignInForm";
import SignUpForm from "./src/components/SignUpForm";
import firebase from "firebase";
export default function App() {
  return (
    //one time password Authentication
    //We need to setup A FireBase

    <View style={styles.container}>
      <SignUpForm />
      <SignInForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
