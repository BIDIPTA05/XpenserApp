import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View className="flex-row justify-center py-8">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;
