import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

export default function Splash({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textDecor}>XpenseR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textDecor: {
    fontSize: 50,
    fontWeight: "800",
    color: "#0b6eba",
  },
});
